import Image from "next/image";

import LinkButton from "../LinkButton";

import data from "@json/socialMediaLinks.json"

export default function printLinks() {
  return data.socialMedias.map(({name, style, link, imageSrc, alt}, index) => (
    <LinkButton key={index} style={style} link={link} ariaLabel={name}>
      <Image src={imageSrc} alt={alt} width={80} height={80} />
    </LinkButton>
  ))
}