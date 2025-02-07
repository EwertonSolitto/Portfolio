'use client'

import useAppContext from "@hook/useAppContext"

import LinkButtonProps from "@models/props/LinkButtonProps"

export default function LinkButton(props: LinkButtonProps)  {
  const {link, content, style, ariaLabel, children} = props
  const {menuButtonOpened} = useAppContext()
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer" aria-label={ariaLabel} tabIndex={menuButtonOpened}>
      {children}
      {content && <span>{content}</span>}
      </a>
  )
}