import TextCardProps from "../interfaces/TextCardProps";
import LinkButton from "./Button";

export default function TextCard (props: TextCardProps) {
  const {size, side, paragraphs, a} = props

  return (
    <div className={`text-card ${side}`}>
      <div className={`front-card ${size}`}>
        <div className="text-card-content">
          
          {paragraphs?.map(({name, style = ''}, index) => {
              return <p key={index} className={style}>{name}</p>
            })}

          <div className="buttons-div">
            {a?.map(({content, link, style = '', svg}, index) => {
              return <LinkButton key={index} link={link} style={style} content={content} svg={svg}/>
            })}
          </div>

        </div>
      </div>
      <div className={`back-card ${size}`}></div>
    </div>
  )
}