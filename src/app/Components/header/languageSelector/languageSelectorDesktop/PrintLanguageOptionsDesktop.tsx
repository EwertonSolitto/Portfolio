import LanguageOptionType from "@models/types/LanguageOptionType"
import LanguageType from "@models/types/LanguageType"

export default function PrintLanguageOptionsDesktop(data: Array<LanguageOptionType>, runLanguageHandler: (language: LanguageType) => void) {
  const options = data.map(({language, value}, index) => {
    if(value === "portuguese" || value === "english") {
      return (
        <li key={index}>
          <button onClick={() => {runLanguageHandler(value)}}>{language}</button>
        </li>
      )
    }
  })

  return options
}