'use client'
import portugueseDataHome from '@json/portuguese/home.json';
import englishDataHome from '@json/english/home.json';
import linksData from '@json/links.json';
import TextCard from './textCard/TextCard';
import useAppContext from '@/hook/useAppContext';

export default function Home() {
  const { isPortuguese } = useAppContext()
  const dataHome = isPortuguese ? portugueseDataHome : englishDataHome
  
  return (
    <main className="home-main">
      <TextCard side="left" paragraphs={dataHome.text} a={linksData.buttons} />
    </main> 
  )
}