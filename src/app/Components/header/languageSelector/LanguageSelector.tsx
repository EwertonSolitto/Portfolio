'use client'

import { useEffect, useState } from "react"

import languageChecker from "./languageChecker"
import languageHandler from "./languageHandler"

import LanguageSelectorDesktop from "./languageSelectorDesktop/LanguageSelectorDesktop"
import LanguageSelectorMobile from "./languageSelectorMobile/LanguageSelectorMobile"

import useAppContext from "@hook/useAppContext"

import LanguageType from "@models/types/LanguageType"
import LanguageSelectorProps from "@models/props/LanguageSelectorProps"

export default function LanguageSelector({ tabNavigation }: LanguageSelectorProps) {
  const [openedSelector, setOpenedSelector] = useState(false)
  const {setIsPortuguese} = useAppContext()

  useEffect(() => {
      setIsPortuguese(languageChecker())
  }, [setIsPortuguese])

  function handleSelector () {
    setOpenedSelector(!openedSelector)
  }

  function handleLanguage(value: string) {
    if(value === "portuguese" || value === "english") {
      runLanguageHandler(value)
    }
  }

  function runLanguageHandler(language: LanguageType) {
    languageHandler(language, setIsPortuguese, setOpenedSelector)
  }
  
  return (
    <div className="select-div">
      
      <LanguageSelectorDesktop 
        handleSelector={handleSelector} 
        openedSelector={openedSelector} 
        runLanguageHandler={runLanguageHandler} 
      />

      <LanguageSelectorMobile 
        tabNavigation={tabNavigation} 
        handleLanguage={handleLanguage} 
      />

    </div>
  )
}