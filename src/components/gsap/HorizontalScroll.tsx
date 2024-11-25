import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "./esm/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import BlobAnimation from "../others/BlobAnimation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



function HorizontalScroll() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[])



    useGSAP(
      () => {
          gsap.to(".slides", {
            x: window.innerWidth < 768? '-70vh':'-65vh',
            scrollTrigger: {
              trigger: ".slides-container",
              start: "center center",
             end:"+=1000",
              scrub: 1,
              pin: true,
            
             //markers: true
            }
          }); 
    
          gsap.to(".text-element", {
            scrollTrigger: {
              trigger: windowWidth< 768?  ".pharagraph" :  ".text-element",
              start:  windowWidth < 768? "bottom+=220px center" :  "center center",
              end:"+=1000",    
              scrub: 1,
              pin: true,
             // markers: true
            }
          }); 
      },

     
      { }
  ); 

  return (
    <div className="flex md:flex-row flex-wrap">
         <div className="flex-col md:w-5/12 mt-5 md:mt-0 pr-[10%] ">
             <div className="text-element flex items-end h-[400px] relative">
             <div className='absolute bottom-[-6rem] left-[-17rem] z-5 w-[400px] h-[400px]'>
                <BlobAnimation fillColor="var(--secondary)" ></BlobAnimation>
              </div> 
                <p className="pharagraph text-white text-right relative z-10">
                  The emotionality of the <span>artistic</span> temperament. My field is <span>sports</span>, but my thinking is <span>artistic</span>. These two niches combined into one can reveal <span>undiscovered layers</span>.
                </p>
             </div> 
        </div> 
         <div  className="square flex-col md:w-7/12  pl-[5%] "> 
            <div className="slides-container overflow-hidden  h-[400px]">
                <div className="slides flex space-x-4 ">
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[400px]" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[400px]" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[400px]" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[400px]" />
                </div>
             </div> 
        </div>
    </div>
   
  );

};

export default HorizontalScroll;
