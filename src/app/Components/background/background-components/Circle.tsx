export default function Circle(props: {styles?: string}) {
  return (
    <div className={`circle${props.styles !== undefined ? ` ${props.styles}` : ''}`}></div>
  )
}