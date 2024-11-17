import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "./esm/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import BlobAnimation from "../others/BlobAnimation";
import BlobCircle from "../others/BlobCircle";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



function HorizontalScroll() {

    useGSAP(
      () => {
          // gsap code here...
          gsap.to(".slides", {
            x:'-60vw',
            scrollTrigger: {
              trigger: ".slides-container",
              start: "center center",
             // end: "bottom center",     
             end:"+=3000",
              scrub: 1,
              pin: true,
             // 
             markers: true
            }
          }); 
    
          gsap.to(".text-element", {
           // x: -(850),
            scrollTrigger: {
              trigger: ".text-element",
              start: "center center",
              end:"+=3000",    
              scrub: 1,
              pin: true,
             // markers: true
            }
          }); 
      },
      { }
  ); 

  return (
    <div className="flex flex-col md:flex-row ">
         <div className="w-full md:w-5/12 mt-5 md:mt-0  pr-[10%] ">
          
             <div className="text-element flex items-end h-[60vh]">
             <div className='absolute bottom-[-150px] left-[-23rem] z-5 w-[80vh] h-[80vh]'>
                <BlobCircle fillColor="#5781b7"  ></BlobCircle>
          </div>
            <p  className="text-white text-right  z-10">
            The emotionality of the <span>artistic</span> temperament. My field is <span>sports</span>, but my thinking is <span>artistic</span>. These two niches combined into one can reveal <span>undiscovered layers</span>.
            </p>
            </div> 
        </div> 
         <div  className="square w-full md:w-7/12  pl-[5%] "> 
            <div className="slides-container overflow-hidden ">
                <div className="slides flex space-x-4 ">
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
                    <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
                </div>
             </div> 
        </div>
    </div>
   
  );
};

export default HorizontalScroll;
