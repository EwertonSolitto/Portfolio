import PrintButtons from "./PrintButtons"

import TextCardButtonDivProps from "@models/props/TextCardButtonDivProps"

export default function TextCardButtonDiv({buttons}: TextCardButtonDivProps) {
  return (
    <div className="buttons-div">
      {PrintButtons(buttons)}
    </div> 
  )
}