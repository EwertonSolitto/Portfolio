import { Dispatch, SetStateAction } from "react"

import LanguageType from "@/models/types/LanguageType"

export default function languageHandler(
  language: LanguageType, 
  setIsPortuguese: Dispatch<SetStateAction<boolean>>,
  setOpenedSelector: Dispatch<SetStateAction<boolean>>
) {
  switch(language) {
    case 'portuguese':
      setIsPortuguese(true)
      break
    case 'english':
      setIsPortuguese(false)
      break
  }
  setOpenedSelector(false)
}