import Side from "../types/Side";

export default interface TextCardProps {
  size: string;
  side: Side;

  paragraphs?: Array<{name: string, style?: string}>;
  a?: Array<{content: string, link: string ,style?: string, svg?: JSX.Element, alt?: string}>;
}