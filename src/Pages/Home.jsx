import React,{Suspense, useEffect, useRef, useState} from 'react'
import Loader from '../Components/Loader'
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { useFrame,useThree } from '@react-three/fiber';
import audiourl from "../assets/sakura.mp3"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiSpeakerXMark } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import PopupData from "../PopupData"
import  Island from "../model/Island"
import Sky from '../model/Sky';
import Plane from '../model/Plane';
import Bird from '../model/Bird';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import 


const Home = () => {
   const [isRotating,setIsRotating]=useState(false)
   const [currentStage,setCurrentStage]=useState(1)
  const [volume,setVloume]=useState(false)
  const audioRef=useRef()
   useEffect(()=>{
    console.log(currentStage)
   },[currentStage])

 useEffect(()=>{
  if(volume && audioRef){
    audioRef.current.play()
  }
  else if(!volume && audioRef){
    audioRef.current.pause()
  }
 },[volume])

    const adjustIslandForScreenSize = () => {
        let screenScale,screenPosition
        if (window.innerWidth < 768) {
          screenScale = [0.9, 0.9, 0.9];
          screenPosition = [0, -6.5, -43.4];
         
        } else {
          screenScale = [1, 1, 1];
          screenPosition = [0, -6.5, -43.4];
        
        }
       
        return [screenScale, screenPosition];
      };
    const adjustBiplaneForScreenSize = () => {
        let screenScale, screenPosition;
    
        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
          screenScale = [1.5, 1.5, 1.5];
          screenPosition = [0, -1.5, 0];
        } else {
          screenScale = [3, 3, 3];
          screenPosition = [0, -3, -4];
        }
    
        return [screenScale, screenPosition];
      };
      const [islandScale,islandPosition]=adjustIslandForScreenSize()
      const [planeScale,planePosition]=adjustBiplaneForScreenSize()
    useEffect(()=>{

    })


  return (
    <section className='w-full h-screen relative'>
          {currentStage ? <div className=' absolute z-10 top-28 left-0 right-0 flex items-center justify-center '>
   <p className='sm:w-1/2  info-box font-bold text-lg flex items-center justify-center text-center'>{PopupData[currentStage-1].title}</p>
   {PopupData[currentStage-1].link &&
   <Link to={PopupData[currentStage-1].link} className='neo-brutalism-white neo-btn flex items-center justify-center w-3/5 sm:w-fit'>
    {PopupData[currentStage-1].linkText}
    <FaArrowRight className=' text-xl'/>
   </Link>
   }
    </div>:"" }
    <Canvas className={`w-full absolute top-0 left-0 h-full bg-transparent ${isRotating ? "cursor-grabbing":"cursor-grab"}`}
    camera={{near:0.1,far:1000}}
    >
  <Suspense fallback={<Loader/>}>
  <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
     <Sky isRotating={isRotating}/>
    
     <Island 
     position={islandPosition}
     scale={islandScale}
     rotation={[0.1,0,0]}
     isRotating={isRotating}
     setIsRotating={setIsRotating}
     setCurrentStage={setCurrentStage}
     />
      <Plane
     rotation={[0,20,0]}
     isRotating={isRotating}
     position={planePosition}
     scale={planeScale}
     />
     <Bird 
     position={[22,2,1]}
     />
  
  </Suspense>
    </Canvas>

    <footer className='w-[90%] ml-[5%] absolute bottom-5 h-10 flex items-center justify-between'>
      <div className=' border-2 w-fit h-fit rounded-full text-2xl p-1 backdrop-blur-md bg-[rgba(255,255,255,0.5)] cursor-pointer' onClick={()=>setVloume(!volume)}>
        <audio src={audiourl} ref={audioRef} className=' hidden'></audio>
        {volume ? <HiSpeakerWave className=''/>:<HiSpeakerXMark/>}
      </div>
      <div className=' flex items-center gap-4'>
        <a href="">
        <FaLinkedinIn className=' w-fit h-fit text-xl p-1  backdrop-blur-md bg-[rgba(255,255,255,0.5)] cursor-pointer '/>
        </a>
       
       <FiGithub className=' w-fit h-fit  text-xl  p-1 backdrop-blur-md bg-[rgba(255,255,255,0.5)] cursor-pointer'/>
      </div>
    </footer>
    </section>
  )
}

export default Home