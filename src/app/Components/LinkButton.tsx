import React from "react"
import { LinkButtonProps } from "../models/interfaces"

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const {link, content, style, ariaLabel, children} = props
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer" aria-label={ariaLabel} tabIndex={-1}>
      {children}
      {content && <span>{content}</span>}
      </a>
  )
}

export default LinkButton