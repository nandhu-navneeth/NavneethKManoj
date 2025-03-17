import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import { useRef, useState, useCallback, Suspense } from "react";
import * as THREE from "three";
import { ErrorBoundary } from "./ErrorBoundary";
import { Background } from "./Background";

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    setMousePosition({
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1
    });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;

      // Add mouse-based movement
      ref.current.rotation.x += mousePosition.y * delta / 10;
      ref.current.rotation.y += mousePosition.x * delta / 10;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled={false} 
        {...props}
        onPointerMove={(e) => onMouseMove(e.nativeEvent)}
      >
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Fallback() {
  return <Background />;
}

function CanvasContent() {
  return (
    <>
      <Stars />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <ambientLight intensity={0.2} />
    </>
  );
}

export function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <ErrorBoundary fallback={<Fallback />}>
        <Suspense fallback={<Fallback />}>
          <Canvas 
            camera={{ position: [0, 0, 1] }}
            style={{ background: 'transparent' }}
            onError={() => console.error("Canvas error occurred")}
          >
            <CanvasContent />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}