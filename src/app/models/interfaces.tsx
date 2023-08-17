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

export interface ProjectsCardProps {
  side: Side;

  title?: {content: string, style?: string}
}