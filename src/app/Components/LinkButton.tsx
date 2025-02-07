'use client'

import useAppContext from "@hook/useAppContext"

import LinkButtonProps from "@models/props/LinkButtonProps"

export default function LinkButton({link, content = '', style, ariaLabel, children}: LinkButtonProps)  {
  const {menuButtonOpened} = useAppContext()
  
  return (
      <a href={link} className={`link-button ${style}`} target="_blank" rel="noreferrer" aria-label={ariaLabel} tabIndex={menuButtonOpened}>
        {children}
        {content && <span>{content}</span>}
      </a>
  )
}