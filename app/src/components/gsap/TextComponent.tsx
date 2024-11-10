// components/Text.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const words = ["CREATIVITY", "EMOTIONALITY", "PASSION"];
gsap.registerPlugin(TextPlugin);

const TextComponent = () => {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Text animation
    const tlMaster = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      const tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to(animatedTextRef.current, { duration: 1, text: word });
      tlMaster.add(tlText);
    });
  }, []);
 //  <h2 ref={cursorRef} id="cursor">|</h2>
  return (
    <div>
      <h2 ref={animatedTextRef} className="animated-text"></h2>
   
    </div>
  );
};

export default TextComponent;
