import { Side } from "./types"

export interface LinkButtonProps {
  content: string
  link: string
  
  style?: string
  
  svg?: JSX.Element
  alt?: string
}

export interface ListCardProps {
  side: Side;
  
  title?: {content: string, style?: string};

  lists: JSX.Element[]
}

export interface TechnologyFigureProps {
  svg: JSX.Element
  description?: {content: string, style?: string}
}

export interface TechnologyListProps {
  title: string
  technologies: Array<{
    svg: JSX.Element, 
    description:{
      content: string, 
      style?: string
    }
  }>
}

export interface TextCardProps {
  side: Side;

  title?: {content: string, style?: string}
  paragraphs?: Array<{content: string, style?: string}>;
  a?: Array<{content: string, link: string ,style?: string, svg?: JSX.Element, alt?: string}>;
}

export interface ProjectCardProps {
  side: Side;

  title: {content: string, style?: string}
  figure: Array<ProjectFigureProps>
}

export interface ProjectFigureProps {
  title: string
  style?: string
  img: string
  alt: string
  tecnologies: Array<string>
  links: {github: string, website: string}
}