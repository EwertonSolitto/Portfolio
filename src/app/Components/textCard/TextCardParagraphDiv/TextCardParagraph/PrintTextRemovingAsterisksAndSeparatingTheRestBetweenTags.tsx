export default function PrintTextRemovingAsterisksAndSeparatingTheRestBetweenTags(content: string) {
    return (
      content.split('*').map((content, index) => {
        return index % 2 !== 0 
        ? 
        <em key={index}>{content}</em> 
        : 
        <span key={index}>{content}</span>
    })
  )
}