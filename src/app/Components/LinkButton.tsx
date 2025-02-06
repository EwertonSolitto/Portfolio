'use client'

import useAppContext from "@hook/useAppContext"

import { LinkButtonProps } from "@models/interfaces"

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const {link, content, style, ariaLabel, children} = props
  const {menuButtonOpened} = useAppContext()
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer" aria-label={ariaLabel} tabIndex={menuButtonOpened}>
      {children}
      {content && <span>{content}</span>}
      </a>
  )
}

export default LinkButton