import { LinkButtonProps } from "../models/interfaces"

export default function LinkButton (props: LinkButtonProps) {
  const {link, content, style, svg} = props
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer">
      {svg}
      {content}
      </a>
  )
}