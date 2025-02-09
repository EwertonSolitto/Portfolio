import PrintParagraphs from "./PrintParagraphs";

import TextCardParagraphDivProps from "@models/props/TextCardParagraphsDiv";

export default function TextCardParagraphDiv({paragraphs}: TextCardParagraphDivProps) {
  return (
    <div className="paragraph-div">
      {PrintParagraphs({paragraphs})}
    </div>
  )
}