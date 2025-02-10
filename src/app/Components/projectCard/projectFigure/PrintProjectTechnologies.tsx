export default function PrintProjectTechnologies(tecnologies: Array<string>) {
  return (
    tecnologies.map((tecnology, index) => {
      return <li key={index}>{tecnology}</li>
    })
  )
}