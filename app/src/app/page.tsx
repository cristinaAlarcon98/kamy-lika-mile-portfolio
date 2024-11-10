import Image from "next/image";
import { ReactLenis, useLenis } from 'lenis/react';
import { Button } from "@/components/ui/button";
import WhoIamPage from "@/pages/WhoIamPage";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';

export default function Home() {
  return (
    <ReactLenis   root >
    <div  style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      
    }}>
      <h1>KML</h1>
    </div>
    <div  style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer'
    }}>
     <IconButton style={{ color: 'var(--primary)' }}>
      <MenuRoundedIcon />
     </IconButton>
    </div>
    <WhoIamPage/>
    </ReactLenis>
  );
}

