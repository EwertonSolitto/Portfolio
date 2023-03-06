import Side from "../types/Side";

export default interface TextCardProps {
  side: Side;

  title?: {content: string, style?: string}
  paragraphs?: Array<{content: string, style?: string}>;
  a?: Array<{content: string, link: string ,style?: string, svg?: JSX.Element, alt?: string}>;
}