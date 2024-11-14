import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const squareRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") { // Client-only code
      const squareElement = squareRef.current;

      gsap.to(".slides", {
        x: -(850),
        markers: true,
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
    <div className="square w-full md:w-7/12 relative pl-[5%] ">
      <div ref={squareRef} className="overflow-hidden">
        <div className="slides flex space-x-4 ">
          <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
          <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
          <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
          <img src="/images/volley.png" alt="Volleyball Image" className="h-[60vh] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
