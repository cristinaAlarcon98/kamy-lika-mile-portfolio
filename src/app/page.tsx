"use client"
import Image from "next/image";
import { ReactLenis, useLenis } from 'lenis/react';
import WhoIam from "../pages/WhoIAm";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[])

  return (
    <ReactLenis root>
      <div  style={{
      position: 'fixed',
      top: '10px',
      left: '20px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      
    }}>
    <h1>{windowWidth < 768 ? "KML" : "KAMYLIKAMILE"}</h1>
    </div>
    <div  style={{
      position: 'fixed',
      top: '10px',
      right: '20px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer'
    }}>
     <IconButton >
      <MenuRoundedIcon  style={{color:'#c1b956'}}  />
     </IconButton>
    </div>
    <WhoIam/>
    </ReactLenis>
    
  );
}

