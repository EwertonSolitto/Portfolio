import TextCardTitleProps from "@models/props/TextCardTitleProps";

export default function TextCardTitle({content, style}: TextCardTitleProps) {
  return <h2 className={style}>{content}</h2>
}