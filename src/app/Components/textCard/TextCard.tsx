import { TextCardProps } from "../../models/interfaces";
import LinkButton from "../Button";

export default function TextCard (props: TextCardProps) {
  const {side, title, paragraphs, a} = props

  const h2 = title &&
    <h2 className={title.style}>
      {title.content}
    </h2>
  
  const paragraphDiv = paragraphs &&
  <div className="paragraph-div">
    {paragraphs.map(({content, style = ''}, index) => {
      return <p key={index} className={style}>{content}</p>
    })} 
  </div>

  const buttonsDiv = a && 
    <div className="buttons-div">
      {a.map(({content, link, style = '', img}, index) => {
        return <LinkButton key={index} link={link} style={style} content={content} img={img}/>
      })}
    </div> 
    

  return (
    <div className={`card text-card ${side}`}>

          {h2 && h2}
          
          {paragraphDiv && paragraphDiv}

          {buttonsDiv && buttonsDiv}

    </div>
  )
}