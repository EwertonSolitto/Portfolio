import Side from "../types/Side";

export default interface TextCardProps {
  size: string;
  side: Side;

  paragraphs?: Array<{name: string, style?: string}>;
  a?: Array<{name: string, url: string ,style?: string}>;
}