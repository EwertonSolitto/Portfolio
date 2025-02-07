import { ReactNode } from "react"

interface LinkButtonProps {
  content?: string
  link: string
  ariaLabel: string
  children?: ReactNode
  
  style?: string
}

export default LinkButtonProps