'use client'

import LinkButton from "@/Components/LinkButton";
import { ArrowRight, Layout } from "@phosphor-icons/react";
import Image from "next/image";

export default function Card() {
  return (
    <li className='project-card'>
      <div className='top-card'>
        <h3>The Blog.</h3>

        <ul className='top-technology-list'>
          <li><Image src={"/technologies/html-logo.svg"} alt='html' width={16} height={16} /></li>
          <li><Image src={"/technologies/css-logo.svg"} alt='html' width={16} height={16} /></li>
          <li><Image src={"/technologies/javascript-logo.svg"} alt='html' width={16} height={16} /></li>
        </ul>
      </div>
      
      <div className='img-card'>
        <Image src={"/projects/the-blog.png"} alt='foto' width={432} height={280}/>
      </div>
      <div className='bottom-img'>
        <Layout size={54} color='#0F1621' weight='fill' />
        <p>Front-end</p>
      </div>

      <div className='description'>
        <h4>Sobre:</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio repellat corrupti quae, ipsa quis ipsam id numquam? fnuasfnafnanf afaosnfianfan</p>
      </div>

      <div className="technologies">
        <h4>Tecnologias:</h4>
        <ul>
          <li>
            <figure>
              <Image src={"/technologies/html-logo.svg"} alt='html' width={32} height={32} />
              <figcaption>HTML</figcaption>
            </figure>        
          </li>
          <li>
            <figure>
              <Image src={"/technologies/css-logo.svg"} alt='css' width={32} height={32} />
              <figcaption>CSS</figcaption>
            </figure>    
          </li>
          <li>
            <figure>
              <Image src={"/technologies/javascript-logo.svg"} alt='javascript' width={32} height={32} />
              <figcaption>Javascript</figcaption>
            </figure>    
          </li>
        </ul>
      </div>
      

      <div className='link-buttons'>
        <LinkButton ariaLabel='0' link='https://github.com/EwertonSolitto/The-Blog' content='Github' style='github'>
          <Image src={"technologies/github-black-logo.svg"} alt='github logo' width={64} height={64} />
        </LinkButton>

        <LinkButton ariaLabel='0' link='https://ewertonsolitto.github.io/The-Blog/' content='Website' style='website'>
          <ArrowRight size={64} color="#0F1621" />
        </LinkButton>
      </div>
    </li>
  )
}