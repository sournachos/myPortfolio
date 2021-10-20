import React, { useRef, useState } from "react";










































































// import './App.scss';

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from '@react-three/drei'
// import { Physics, usePlane } from "@react-three/cannon";

// function Plane(props) {
//   const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
//       <shadowMaterial attach="material" color="#3489eb" />
//     </mesh> 
//   )
// }

// const SpinningBox = ({ position }) => {
//   const mesh = useRef(null)
//   const [active, setActive] = useState(false)

//   useFrame(() => {
//     const maxRotation = Math.PI * 2;
//     active ? mesh.current.rotation.y = Math.PI / 180 : mesh.current.rotation.y += 0.003;
//     (mesh.current.rotation.y >= maxRotation) ? mesh.current.rotation.y = 0 : mesh.current.rotation.y += 0.003
//   })

//   return (
//     <mesh
//       position={position}
//       scale={active ? 1.5 : 1}
//       ref={mesh}
//       onClick={(event) => setActive(!active)}
//       receiveShadow castShadow
//     >
//       <boxBufferGeometry attach='geometry' args={[2, 3, 1]} />
//       <meshStandardMaterial attach='material' color='lightblue' />
//     </mesh>
//   )
// }

// function App() {

//   return (
//     <>
//     <h5>Right-click + Hold 2 Pan</h5>
//     <h5>Left-click + Hold 2 Orbit</h5>
//     <h5>Mouse Scroll Wheel 2 Zoom</h5>
//     <Canvas colorManagement shadowMap camera={{ position: [-2, 3, 12], fov: 50 }}>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[10, 4, 11]} angle={0.3} penumbra={1} intensity={1} castShadow />
//       <Physics>
//         <Plane/>
//         <SpinningBox position={[1, 1.5, 0]} />
//         <SpinningBox position={[-3.5, 1.5, 0]} />
//         <SpinningBox position={[5.5, 1.5, 0]} />
//       </Physics>
//       <OrbitControls />
//     </Canvas>
//     </>
//   );
// }

export default App;