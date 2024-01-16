'use client'

import { ReactNode, useState } from "react"
import { AppContext } from "./AppContext"

export default function AppProvider(props: { children: ReactNode }) {
  const [menuButtonOpened, setMenuButtonOpened] = useState<0 | -1>(0)
  const [isPortuguese, setIsPortuguese] = useState(true)

  const handleMenuButtonOpened = (): void => {
    menuButtonOpened === 0 ? setMenuButtonOpened(-1) : setMenuButtonOpened(0)
  }
  
  return (
    <AppContext.Provider value={{ menuButtonOpened, handleMenuButtonOpened, isPortuguese, setIsPortuguese }}>
      {props.children}
    </AppContext.Provider>
  )
}