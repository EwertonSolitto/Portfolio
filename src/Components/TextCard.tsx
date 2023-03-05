import TextCardProps from "../interfaces/TextCardProps";
import LinkButton from "./Button";

export default function TextCard (props: TextCardProps) {
  const {size, side, paragraphs, a} = props

  return (
    <div className={`text-card ${side}`}>
      <div className={`front-card ${size}`}>
        <div className="text-card-content">
          {paragraphs?.map(({name, style}) => {
              return <p className={style}>{name}</p>
            })}

          {a?.map(({content, link, style, svg}) => {
              return <LinkButton link={link} style={style} content={content} svg={svg}/>
            })}
        </div>
      </div>
      <div className={`back-card ${size}`}></div>
    </div>
  )
}