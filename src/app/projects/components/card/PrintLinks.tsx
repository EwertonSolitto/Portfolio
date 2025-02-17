import Image from "next/image";

import LinkButton from "@Components/LinkButton";

import CardLinks from "@models/types/CardLinks";
import { ArrowRight } from "@phosphor-icons/react";

export default function PrintLinks(links: CardLinks) {
  const websiteButton = links.website && (
    <LinkButton ariaLabel='0' link={links.website} content='Website' style='website'>
      <ArrowRight size={32} color="#0F1621" fill="bold" />
    </LinkButton>
  )

  return (
    <>
      <LinkButton ariaLabel='0' link={links.github} content='Github' style='github'>
        <Image src={"technologies/github-black-logo.svg"} alt='github logo' width={32} height={32} />
      </LinkButton>

      {websiteButton}
    </>
  )
}