import { TextareaHTMLAttributes, forwardRef } from "react"

import useAppContext from "@/hook/useAppContext"

const ContactTextarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((
  {name, ...rest}, ref
) => {
  const { menuButtonOpened } = useAppContext()

  return (
      <textarea 
        {...rest}
        name={name}
        required 
        ref={ref}
        autoComplete="on"
        tabIndex={menuButtonOpened}
      />
  )
})

ContactTextarea.displayName = 'Input'

export default ContactTextarea