import useAppContext from "@/hook/useAppContext"
import { InputHTMLAttributes, forwardRef } from "react"

const ContactInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((
  {name, type, ...rest}, ref
) => {
  const { menuButtonOpened } = useAppContext()

  return (
      <input 
        {...rest}
        type={type}
        name={name}
        required 
        ref={ref}
        autoComplete="on"
        tabIndex={menuButtonOpened}
      />
  )
})

ContactInput.displayName = 'Input'

export default ContactInput