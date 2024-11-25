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
            x: window.innerWidth < 768? '-70vh':'-65vh',
            scrollTrigger: {
              trigger: ".slides-container",
              start: "center center",
             // end: "bottom center",     
             end:"+=1000",
              scrub: 1,
              pin: true,
             // 
             //markers: true
            }
          }); 
    
          gsap.to(".text-element", {
           // x: -(850),
            scrollTrigger: {
              trigger: window.innerWidth < 768?  ".pharagraph" :  ".text-element",
              //
              //".pharagraph
              start:  window.innerWidth < 768? "bottom+=250px center" :  "center center",
              // 
              //"bottom+=250px center",
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
                <p className="pharagraph text-white text-right  z-10">
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
