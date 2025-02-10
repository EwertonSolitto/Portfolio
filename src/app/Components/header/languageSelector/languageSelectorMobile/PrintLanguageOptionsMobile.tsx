import LanguageOptionType from "@/models/types/LanguageOptionType";

export default function PrintLanguageOptionsMobile(data: Array<LanguageOptionType>) {
  const options = data.map(({language, value}, index) => {
    if(value === "portuguese" || value === "english") {
      return (
        <option key={index} className="option" value={value}>{language}</option>
      )
    }
  })
  
  return options
}