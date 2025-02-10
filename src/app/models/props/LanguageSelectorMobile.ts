import LanguageSelectorProps from "./LanguageSelectorProps";

export default interface LanguageSelectorMobileProps extends LanguageSelectorProps {
  handleLanguage: (value: string) => void
}