import Circle from "./background-components/Circle";
import Points from "./background-components/Points";
import Wave1 from "./background-components/Wave1";
import Wave2 from "./background-components/Wave2";

export default function Background() {
  return (
    <div className="background-elements">
      <Circle styles="first-circle"/> 
      <Points styles="vertical first-points" quantity={3}/>
      <Points styles="second-points" quantity={3}/>
      <Points styles="third-points" quantity={3}/>
      <Wave1 />
      <p className="html">&lt;html&gt;</p>
      <p className="empty-tag">&lt;/&gt;</p>
      <p className="empty-array space">[]</p>
      <p className="empty-object space">{'{}'}</p>
      <Circle styles="second-circle reverse"/> 
      <Points styles="fourth-points" quantity={2}/>
      <p className="hello-world">console.log(&quot;Hello World!&quot;)</p>
      <p className="bars">&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;&#x0002F;</p>
      <Wave2 />
      <Circle styles="third-circle no-background"/> 
    </div>
  )
}