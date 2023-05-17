import ListCardProps from "../interfaces/ListCardProps";

export default function ListCard(props: ListCardProps) {
  const {title, lists, side} = props
  
  const h2 = title ? 
    <h2 className={title.style}>
      {title.content}
    </h2>
  : ''

  return (
    <div className={`card list-card ${side}`}>
      
      {h2 ? h2 : ''}

      {lists ? lists : ''}

    </div>
  )
}