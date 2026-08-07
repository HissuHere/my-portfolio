import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Normalized scroll progress: 0 at top, 1 at bottom of the page. */
function getScrollProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
}

/* One smooth metallic torus knot + a single thin orbit ring. */
function CoreObject() {
  const core = useRef(null);
  const ring = useRef(null);

  const yRef = useRef(0);
  const xRef = useRef(0);

  useFrame((state, delta) => {
    const t = reduceMotion ? 0 : state.clock.elapsedTime;
    const progress = getScrollProgress();

    const targetY = progress * Math.PI * 3 + Math.sin(t * 0.2) * 0.15;
    const targetX = progress * Math.PI * 0.4;
    const ease = Math.min(1, delta * 5);

    yRef.current += (targetY - yRef.current) * ease;
    xRef.current += (targetX - xRef.current) * ease;

    if (core.current) {
      core.current.rotation.y = yRef.current;
      core.current.rotation.x = xRef.current;
      core.current.rotation.z = 0.45 + Math.sin(t * 0.25) * 0.15;
    }
    if (ring.current) {
      ring.current.rotation.z = progress * Math.PI * 1.5 + t * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <torusKnotGeometry args={[1, 0.32, 160, 24]} />
        <meshStandardMaterial
          color="#0E7490"
          emissive="#22D3EE"
          emissiveIntensity={0.32}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.3, 0.012, 8, 128]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function SceneContents() {
  const { viewport } = useThree();
  const groupRef = useRef(null);

  const groupPosition = useMemo(() => {
    const x = Math.min(viewport.width * 0.22, 2.2);
    return [x, 0, -1.5];
  }, [viewport.width]);

  /* subtle parallax drift as the user scrolls */
  useFrame(() => {
    if (!groupRef.current) return;
    const progress = getScrollProgress();
    groupRef.current.position.y = -progress * 1.8;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={1.4} color="#22D3EE" />

      <Stars
        radius={50}
        depth={30}
        count={700}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <group ref={groupRef} position={groupPosition}>
        <CoreObject />
      </group>

      <Sparkles
        count={40}
        scale={[12, 7, 7]}
        size={1.8}
        speed={0.25}
        opacity={0.4}
        color="#7dd3fc"
      />
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
