import TextCardTitle from "./TextCardTitle";
import TextCardParagraphDiv from "./TextCardParagraphDiv/TextCardParagraphDiv";
import TextCardButtonDiv from "./TextCardButtonDiv/TextCardButtonDiv";

import TextCardProps from "@models/props/TextCardProps";

export default function TextCard ({side, title, paragraphs, buttons}: TextCardProps) {
  return (
    <div className={`card text-card ${side}`}>

          {title && <TextCardTitle content={title.content} style={title.style} />}
          
          {paragraphs && <TextCardParagraphDiv paragraphs={paragraphs.paragraphs}/>}

          {buttons && <TextCardButtonDiv buttons={buttons.buttons}/>}

    </div>
  )
}