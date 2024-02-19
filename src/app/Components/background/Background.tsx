'use client'

import Circle from "./background-components/Circle";
import Points from "./background-components/Points";
import Wave1 from "./background-components/Wave1";
import Wave2 from "./background-components/Wave2";
import { Code, BracketsSquare, BracketsCurly } from "@phosphor-icons/react";
import Javascript from "./background-components/technologies/Javacript";
import NextJS from "./background-components/technologies/NextJS";
import Typescript from "./background-components/technologies/Typescript";
import ReactJS from "./background-components/technologies/ReactJS"; 
import Github from "./background-components/technologies/Github";
import Sass from "./background-components/technologies/Sass";
import CSS from "./background-components/technologies/CSS";
import HTML from "./background-components/technologies/HTML";
import Wave3 from "./background-components/Wave3";
import Wave4 from "./background-components/Wave4";
import Wave6 from "./background-components/Wave6";
import Wave5 from "./background-components/Wave5";

export default function Background() {
  return (
    <div className="background-elements" aria-hidden>
      <Circle styles="first-circle"/> 
      <Circle styles="second-circle reverse"/> 
      <Circle styles="third-circle no-background"/>
      <Circle styles="fourth-circle" />
      <Circle styles="fifth-circle gray-background gray-reverse" />
      <Circle styles="sixth-circle gray-no-background" />
      <Circle styles="seventh-circle gray-background" />
      <Circle styles="eighth-circle white-background" />
      <Circle styles="ninth-circle white-background no-background" />

      <Points styles="first-points vertical" quantity={3}/>
      <Points styles="second-points" quantity={3}/>
      <Points styles="third-points" quantity={3}/>
      <Points styles="fourth-points" quantity={2}/>
      <Points styles="fifth-points vertical" quantity={2}/>
      <Points styles="sixth-points vertical" quantity={3}/>
      <Points styles="seventh-points gray-background vertical" quantity={3}/>
      <Points styles="eighth-points gray-background" quantity={2}/>
      <Points styles="ninth-points gray-background" quantity={3}/>
      <Points styles="tenth-points gray-background vertical" quantity={3}/>
      <Points styles="eleventh-points gray-background" quantity={3}/>
      <Points styles="twelfth-points gray-background vertical" quantity={2}/>
      <Points styles="thirteenth-points vertical" quantity={3}/>
      <Points styles="fourteenth-points" quantity={2}/>

      <Wave1 />
      <Wave2 />
      <Wave3 />
      <Wave4 />
      <Wave5 />
      <Wave6 />
      
      <Code color="#272D37" weight="regular" size={64} className="code first"/>
      <Code color="#0F1621" weight="regular" size={64} className="code second"/>
      <BracketsSquare color="#272D37" weight="regular" size={64} className="array first"/>
      <BracketsSquare color="#272D37" weight="regular" size={64} className="array second"/>
      <BracketsSquare color="#272D37" weight="regular" size={64} className="array third"/>
      <BracketsCurly color="#272D37" weight="regular" size={64} className="object first"/>
      <BracketsCurly color="#0F1621" weight="regular" size={64} className="object second"/>

      <p className="hello-world">console.log(&quot;Hello World!&quot;)</p>
      <p className="bars">&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;</p>
      <p className="html">&lt;html&gt;</p>
      <p className="show-my-projects">function showMyProjects (projects) &#x0007B;</p>
      <p className="close-show-my-projects">&#x0007D;</p>

      <p className="css-code">
        <span className="first-part">h1 &#x0007B;</span>
        <span className="second-part">color: red;</span>
        <span className="third-part">&#x0007D;</span>
      </p>
      
      <Javascript />
      <ReactJS />
      <Github />
      <NextJS />
      <HTML />
      <Sass />
      <Typescript />
      <CSS />
      
    </div>
  )
}