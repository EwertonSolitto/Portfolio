import LinkButtonProps from "../interfaces/LinkButtonProps";

export default function LinkButton (props: LinkButtonProps) {
  const {link, content, style, svg} = props
  
  return (
      <a href={link} className={`link-button ${style}`}>
      {svg}
      {content}
      </a>
  )
}