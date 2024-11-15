import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const squareRef = useRef(null);
  const slidesRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") { // Client-only code
      const squareElement = squareRef.current;
      const slidesElement = slidesRef.current

      gsap.to(slidesElement, {
        x: -(850),
       // markers: true,
        scrollTrigger: {
          trigger: squareElement,
          start: "center center",
          end: "bottom center",     
          scrub: 2,
          pin: true,
          markers: true
        }
      });

      


      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div  className="flex flex-col md:flex-row">
         <div className="w-full md:w-5/12 mt-5 md:mt-0  pr-[10%] flex items-end	">
    <p className="text-white text-right">
      Creativity encompasses the  ability to  the  ability to discover new and <span >original ideas</span>, connections, and solutions to problems. My judgments are <span>insightful</span> and my perceptions are <span>fresh</span> .
    </p>
  </div>
    <div className="square w-full md:w-7/12 relative pl-[5%] ">
      <div ref={squareRef} className="overflow-hidden">
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
