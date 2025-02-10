import LanguageType from "../types/LanguageType"

export default interface LanguageSelectorDesktopProps {
  handleSelector: () => void
  openedSelector: boolean
  runLanguageHandler: (language: LanguageType) => void
}