import PrintTextRemovingAsterisksAndSeparatingTheRestBetweenTags from "./PrintTextRemovingAsterisksAndSeparatingTheRestBetweenTags";

import TextCardParagraphProps from "@models/props/TextCardParagraphProps";

export default function TextCardParagraph({content, style}: TextCardParagraphProps) {
  return (
    <p className={style}>
      {PrintTextRemovingAsterisksAndSeparatingTheRestBetweenTags(content)}
    </p>
  )
}