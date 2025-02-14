import Image from "next/image"

import TechnologyFigureProps from "@models/props/TechnologyFigureProps"

export default function TechnologyFigure({img, description}: TechnologyFigureProps) {
  return (
    <li aria-label={description?.content}>
      <figure>
        <div>
          <Image src={img.src} alt={img.alt} width={80} height={80} />
        </div>
        <figcaption className={description?.style}>{description?.content}</figcaption>
      </figure>
    </li>
  )
}