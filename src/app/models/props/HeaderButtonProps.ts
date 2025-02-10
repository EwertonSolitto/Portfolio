import { ReactNode } from "react"

export default interface HeaderButtonProps {
  handler: () => void
  children?: ReactNode
}