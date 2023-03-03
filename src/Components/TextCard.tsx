import TextCardProps from "../Interfaces/TextCardProps";

export default function TextCard (props: TextCardProps) {
  const {size, paragraphs, a} = props

  return (
    <div className="text-card">
      <div className={`front-card ${size}`}>
        <div className="text-card-content">
          {paragraphs?.map(({name, style}) => {
              return <p className={style}>{name}</p>
            })}

          {a?.map(({name, url, style}) => {
              return <a href={url} className={style}>{name}</a>
            })}
        </div>
      </div>
      <div className={`back-card ${size}`}></div>
    </div>
  )
}