"use client"; // This line ensures the component is rendered on the client side

import { ReactLenis, useLenis } from 'lenis/react';
import { Button } from "@/components/ui/button"
import TypeWriterText from '@/components/gsap/TypeWriterText';
import VolleyImg from '@/assets/images/volley.png'
import Image from 'next/image';
import BlobAnimation from '@/components/others/BlobAnimation';






export function WhoIamPage() {
  

  return (
  
      <div style={{ paddingTop: '100px', backgroundColor:'#000', minWidth:'420px'}}>
        <section style={{ height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <TypeWriterText words={["CREATIVITY", "EMOTIONALITY", "PASSION"]}  />
        </section>

        <section className="bg-black h-[90vh] p-5 ">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row pl-[10%]">
              <div className="w-full md:w-5/12 relative">
               <div className='absolute bottom-11 left-[-13rem] z-5 w-[50vh] h-[50vh]'>
                <BlobAnimation ></BlobAnimation>
                </div> 
                <img src="/images/volley.png" 
                  alt="Volleyball Image" 
                  className="h-[50vh] w-auto relative z-10" />
              </div>
              <div className="w-full md:w-7/12 mt-5 md:mt-0  px-5 flex items-end	">
                <p className="text-white text-right">
                  Creativity encompasses the ability to discover new and original ideas, connections, and solutions to problems. My judgments are insightful and my perceptions are fresh.
                </p>
              </div>
      
    
            </div>
          </div>
        </section>


        <section style={{ height: '800px', backgroundColor: '#d0d0d0', padding: '20px' }}>
          <img></img>
          <p>Yet another section to add to the scrolling experience. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section style={{ height: '800px', backgroundColor: '#c0c0c0', padding: '20px' }}>
          <h2>Section 4</h2>
          <p>This is the last section. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </section>
      </div>
   
  );
}

export default WhoIamPage;

