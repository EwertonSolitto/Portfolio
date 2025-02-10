import { SetStateAction } from "react"

import TabIndex from "@models/types/TabIndex"

export default function handleTabNav(tabNav: TabIndex, setTabNav: (value: SetStateAction<TabIndex>) => void) {
  if(tabNav === 0) {
    setTabNav(-1)
  } else {
    setTabNav(0)
  }
}