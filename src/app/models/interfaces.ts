import { ReactNode } from "react"
import { ImageType, Side } from "./types"

export interface LinkButtonProps {
  content: string
  link: string
  ariaLabel: string
  children?: ReactNode
  
  style?: string
}

export interface ListCardProps {
  side: Side;

  lists: Array<TechnologyListProps>
}

export interface TechnologyListProps {
  title: string
  technologies: Array<TechnologyFigureProps>
}

export interface TechnologyFigureProps {
  img: ImageType
  description?: {content: string, style?: string}
}

export interface TextCardProps {
  side: Side;

  title?: {content: string, style?: string}
  paragraphs?: Array<{content: string, style?: string}>;
  a?: Array<{img?: ImageType, buttonProps: LinkButtonProps}>;
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

export interface ContactCardProps {
  side: Side

  title: string
}