import Image from "next/image"

import LinkButton from "@Components/LinkButton"

import ButtonList from "@models/types/ButtonList"

export default function PrintButtons(buttons: ButtonList) {
  return (
      buttons.map(({img, buttonProps}, index) => (
        <LinkButton
          key={index} 
          link={buttonProps.link} 
          style={buttonProps.style} 
          content={buttonProps.content} 
          ariaLabel={buttonProps.ariaLabel}
        >
          {img && <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>}
        </ LinkButton>
      ))
  )
}