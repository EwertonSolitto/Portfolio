import Image from "next/image";
import { TextCardProps } from "@models/interfaces";
import LinkButton from "../LinkButton";

export default function TextCard (props: TextCardProps) {
  const {side, title, paragraphs, a} = props

  const h2 = title &&
    <h2 className={title.style}>
      {title.content}
    </h2>
  
  const paragraphDiv = paragraphs &&
  <div className="paragraph-div">
    {paragraphs.map(({content, style = ''}, index) => {
      const newContent = <>{
        content.split('*').map((cont, i) => {
          return i % 2 !== 0 ? <em key={i}>{cont}</em> : <span key={i}>{cont}</span>
        })
      }</>

      return <p key={index} className={style}>{newContent}</p>
    })} 
  </div>

  const buttonsDiv = a && 
    <div className="buttons-div">
      {a.map(({img, buttonProps}, index) => {
        return (
          <LinkButton key={index} link={buttonProps.link} style={buttonProps.style} content={buttonProps.content} ariaLabel={buttonProps.ariaLabel}>
            {img && <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>}
          </ LinkButton>
      )})}
    </div> 
    

  return (
    <div className={`card text-card ${side}`}>

          {h2 && h2}
          
          {paragraphDiv && paragraphDiv}

          {buttonsDiv && buttonsDiv}

    </div>
  )
}