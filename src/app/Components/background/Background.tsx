'use client'

import Circle from "./background-components/Circle";
import Points from "./background-components/Points";
import Wave1 from "./background-components/Wave1";
import Wave2 from "./background-components/Wave2";
import { Code, BracketsSquare, BracketsCurly } from "@phosphor-icons/react";
import Javascript from "./background-components/Javacript";
import NextJS from "./background-components/NextJS";

export default function Background() {
  return (
    <div className="background-elements" aria-hidden>
      <Circle styles="first-circle"/> 
      <Points styles="vertical first-points" quantity={3}/>
      <Points styles="second-points" quantity={3}/>
      <Points styles="third-points" quantity={3}/>
      <Wave1 />
      <p className="html">&lt;html&gt;</p>
      <Code color="#272D37" weight="regular" size={64} className="code"/>
      <BracketsSquare color="#272D37" weight="regular" size={64} className="array"/>
      <BracketsCurly color="#272D37" weight="regular" size={64} className="object"/>
      <Circle styles="second-circle reverse"/> 
      <Points styles="fourth-points" quantity={2}/>
      <p className="hello-world">console.log(&quot;Hello World!&quot;)</p>
      <p className="bars">&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;</p>
      <Wave2 />
      <Circle styles="third-circle no-background"/> 
      <Points styles="vertical fifth-points" quantity={2}/>
      <Javascript />
      <NextJS />
    </div>
  )
}