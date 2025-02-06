import Side from "../types/Side";
import ImageType from "../types/ImageType";
import LinkButtonProps from "./LinkButtonProps";

interface TextCardProps {
  side: Side;

  title?: {content: string, style?: string}
  paragraphs?: Array<{content: string, style?: string}>;
  a?: Array<{img?: ImageType, buttonProps: LinkButtonProps}>;
}

export default TextCardProps