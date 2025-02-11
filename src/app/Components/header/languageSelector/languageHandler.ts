import { Dispatch, SetStateAction } from "react"

import LanguageType from "@/models/types/LanguageType"

export default function languageHandler(
  language: LanguageType, 
  setIsPortuguese: Dispatch<SetStateAction<boolean>>,
  setOpenedSelector: Dispatch<SetStateAction<boolean>>
) {
  switch(language) {
    case 'portuguese':
      document.documentElement.lang = 'pt-br'
      setIsPortuguese(true)
      break
    case 'english':
      document.documentElement.lang = 'en'
      setIsPortuguese(false)
      break
  }
  setOpenedSelector(false)
}