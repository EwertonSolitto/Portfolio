import TextCardParagraph from "./TextCardParagraph/TextCardParagraph";

import TextCardParagraphDivProps from "@models/props/TextCardParagraphsDiv";

export default function PrintParagraphs({paragraphs}: TextCardParagraphDivProps) {
  return (
    paragraphs.map(({content, style}, index) => (
      <TextCardParagraph content={content} style={style} key={index} />
    ))
  )
}