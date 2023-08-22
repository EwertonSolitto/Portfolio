import Image from "next/image"
import { LinkButtonProps } from "../models/interfaces"

export default function LinkButton (props: LinkButtonProps) {
  const {link, content, style, img} = props
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer">
      <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
      <span>{content}</span>
      </a>
  )
}