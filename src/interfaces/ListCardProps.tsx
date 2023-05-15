import Side from "../types/Side";

export default interface ListCardProps {
  side: Side;
  
  title?: {content: string, style?: string};

  lists: JSX.Element[]
}