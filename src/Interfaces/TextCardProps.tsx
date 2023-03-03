export default interface TextCardProps {
  size: string;

  paragraphs?: Array<{name: string, style?: string}>;
  a?: Array<{name: string, url: string ,style?: string}>;
}