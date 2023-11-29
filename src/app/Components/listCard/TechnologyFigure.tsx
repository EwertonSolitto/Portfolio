import Image from "next/image"
import { TechnologyFigureProps } from "../../models/interfaces"

export default function TechnologyFigure(props: TechnologyFigureProps) {
  const {img, description} = props

  return (
    <li aria-label={description?.content}>
      <figure>
        <div>
          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
        </div>
        <figcaption className={description?.style}>{description?.content}</figcaption>
      </figure>
    </li>
  )
}