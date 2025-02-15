import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ComputerModelContainer = () => {
  return (
    <Canvas className="">
      <Suspense fallback={"Loading..."}>
        <Stage environment="night" intensity={0.5}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};
export default ComputerModelContainer;
