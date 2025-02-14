'use client'

import Image from "next/image";
import { ArrowRight, Layout } from "@phosphor-icons/react";

import LinkButton from "@Components/LinkButton";

import useAppContext from "@hook/useAppContext";

import CardProps from "@models/props/CardProps";

export default function Card({
  title, 
  description, 
  projectType, 
  technologies, 
  links
}: CardProps) {
  const { isPortuguese } = useAppContext()

  return (
    <li className='project-card'>
      <div className='top-card'>
        <h3>{title}</h3>

        <ul className='top-technology-list'>
          {
            technologies.map(({name, src}, index) => {
              if(index > 2) {
                return null
              }
              return (
                <li key={index}>
                  <Image src={src} alt={name} width={44} height={44} />
                </li>
              )
            })
          }
        </ul>
      </div>
      
      <div className='img-card'>
        <Image src={"/projects/the-blog.png"} alt='foto' width={448} height={292}/>
      </div>
      <div className='bottom-img'>
        <Layout size={32} color='#0F1621' weight='fill' />
        <p>{projectType}</p>
      </div>

      <div className='description'>
        <h4>{isPortuguese ? "Sobre" : "About"}:</h4>
        <p>{isPortuguese ? description.portuguese : description.english}</p>
      </div>

      <div className="technologies">
        <h4>{isPortuguese ? "Tecnologias" : "Technologies"}:</h4>
        <ul>
          {
            technologies.map(({name, src}, index) => {
              return (
                <li key={index}>
                  <figure>
                    <Image src={src} alt={name} width={56} height={56} />
                    <figcaption>{name}</figcaption>
                  </figure>
                </li>
              )
            })
          }
        </ul>
      </div>
      

      <div className='link-buttons'>
        <LinkButton ariaLabel='0' link={links.github} content='Github' style='github'>
          <Image src={"technologies/github-black-logo.svg"} alt='github logo' width={32} height={32} />
        </LinkButton>

        <LinkButton ariaLabel='0' link={links.website} content='Website' style='website'>
          <ArrowRight size={32} color="#0F1621" fill="bold" />
        </LinkButton>
      </div>
    </li>
  )
}