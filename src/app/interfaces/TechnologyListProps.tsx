export default interface TechnologyListProps {
  title: string
  technologies: Array<{
    svg: JSX.Element, 
    description:{
      content: string, 
      style?: string
    }
  }>
}