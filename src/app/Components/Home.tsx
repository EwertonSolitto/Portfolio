'use client'

import TextCard from './textCard/TextCard';

import useAppContext from '@hook/useAppContext';

import portugueseData from '@json/portuguese/home.json';
import englishData from '@json/english/home.json';
import linksData from '@json/links.json';

export default function Home() {
  const { isPortuguese } = useAppContext()
  const homeData = isPortuguese ? portugueseData : englishData
  
  return (
    <main className="home-main">
      <TextCard side="left" paragraphs={homeData.text} buttons={linksData.buttons} />
    </main> 
  )
}