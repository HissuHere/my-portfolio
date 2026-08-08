import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Normalized scroll progress: 0 at top, 1 at bottom of the page. */
function getScrollProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
}

/* Silver metallic torus knot + one thin orbit ring + a faint wireframe
   companion. Quiet, monochrome, mostly stationary. */
function CoreObject() {
  const core = useRef(null);
  const ring = useRef(null);
  const wire = useRef(null);

  const yRef = useRef(0);
  const xRef = useRef(0);

  useFrame((state, delta) => {
    const t = reduceMotion ? 0 : state.clock.elapsedTime;
    const progress = getScrollProgress();

    const targetY = progress * Math.PI * 3 + Math.sin(t * 0.2) * 0.08;
    const targetX = progress * Math.PI * 0.35;
    const ease = Math.min(1, delta * 4);

    yRef.current += (targetY - yRef.current) * ease;
    xRef.current += (targetX - xRef.current) * ease;

    if (core.current) {
      core.current.rotation.y = yRef.current;
      core.current.rotation.x = xRef.current;
      core.current.rotation.z = 0.35 + Math.sin(t * 0.25) * 0.06;
    }
    if (ring.current) {
      ring.current.rotation.z = progress * Math.PI * 1.2 + t * 0.06;
    }
    if (wire.current) {
      wire.current.rotation.y = t * 0.12;
      wire.current.rotation.x = t * 0.08;
      wire.current.position.y = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <torusKnotGeometry args={[1, 0.32, 140, 20]} />
        <meshStandardMaterial
          color="#f1f1f3"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.2, 0.008, 8, 128]} />
        <meshBasicMaterial color="#b8b8c0" transparent opacity={0.5} />
      </mesh>

      <mesh ref={wire} position={[2.4, 0.6, 0.4]}>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color="#a9a9b2"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

function SceneContents() {
  const { viewport } = useThree();
  const groupRef = useRef(null);

  const groupPosition = useMemo(() => {
    const x = Math.min(viewport.width * 0.26, 2.4);
    return [x, 0, -1.5];
  }, [viewport.width]);

  /* gentle parallax drift as the user scrolls */
  useFrame(() => {
    if (!groupRef.current) return;
    const progress = getScrollProgress();
    groupRef.current.position.y = -progress * 1.5;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-5, 3, 5]} intensity={0.45} color="#ffffff" />
      <pointLight position={[-3, -2, 4]} intensity={0.5} color="#cfd0ff" />

      <group ref={groupRef} position={groupPosition}>
        <CoreObject />
      </group>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
