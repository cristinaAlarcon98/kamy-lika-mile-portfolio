"use client"; // This line ensures the component is rendered on the client side

import { ReactLenis, useLenis } from 'lenis/react';
import { Button } from "@/components/ui/button"
import TextComponent from '@/components/gsap/TextComponent';





export function WhoIamPage() {
  

  return (
  
      <div style={{ paddingTop: '100px', backgroundColor:'#000'}}>
        
       
        
       
        <section style={{ height: '600px',marginBottom:'120px' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <h2>CREATIVITY - EMOTIONALITY - PASSION
        </h2> */}
<TextComponent />
</section>

        <section style={{ backgroundColor: 'black',height: '800px', padding: '20px' }}>
          <h2>Section 2</h2>
          <p>This is another section with more content. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

        <section style={{ height: '800px', backgroundColor: '#d0d0d0', padding: '20px' }}>
          <h2>Section 3</h2>
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

