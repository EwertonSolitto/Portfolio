export default function Points(props: {styles?: string, quantity: number}) {
  const points = []

  for (let i = 0; i < props.quantity; i++) {
    points.push(i)
  }

  return (
    <div className={`points${props.styles !== undefined ? ` ${props.styles}` : ''}`}>
      {points.map(p => {return (<p key={p}>.................</p>)})}
    </div>
  )
}