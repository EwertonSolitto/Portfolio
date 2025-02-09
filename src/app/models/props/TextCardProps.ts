import Side from "../types/Side";
import TextCardTitleProps from "./TextCardTitleProps";
import TextCardParagraphDivProps from "./TextCardParagraphsDiv";
import TextCardButtonDivProps from "./TextCardButtonDivProps";

interface TextCardProps {
  side: Side;

  title?: TextCardTitleProps
  paragraphs?: TextCardParagraphDivProps;
  buttons?: TextCardButtonDivProps;
}

export default TextCardProps