import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const slidesContainerRef = useRef(null);
  const slidesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
      const slidesContainerElemet = slidesContainerRef.current;
      const slidesElement = slidesRef.current
      const textElement = textRef.current;

     gsap.to(slidesElement, {
        x: -(850),
        duration:10000,
        scrollTrigger: {
          trigger: slidesContainerElemet,
          start: "center center",
          end: "bottom center",     
          scrub: 1,
          pin: true,
          markers: true
        }
      }); 

      gsap.to(textElement, {
       // x: -(850),
        scrollTrigger: {
          trigger: textElement,
          start: "center center",
          end: "bottom center",     
          scrub: 1,
          pin: true,
         // markers: true
        }
      }); 

     
     


      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

  return (
    <div className="flex flex-col md:flex-row ">
         <div className="w-full md:w-5/12 mt-5 md:mt-0  pr-[10%] ">
             <div ref={textRef}  className="flex items-end h-[60vh]">
            <p  className="text-white text-right ">
            The emotionality of the <span>artistic</span> temperament. My field is <span>sports</span>, but my thinking is <span>artistic</span>. These two niches combined into one can reveal <span>undiscovered layers</span>.
            </p>
            </div> 
        </div> 
         <div  className="square w-full md:w-7/12  pl-[5%] "> 
            <div ref={slidesContainerRef} className="overflow-hidden ">
                <div ref={slidesRef}className="slides flex space-x-4 ">
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
