import TextCard from "./textCard/TextCard";

import useAppContext from "@hook/useAppContext";

import portugueseData from '@json/portuguese/about.json';
import englishData from '@json/english/about.json';

export default function About() {
  const { isPortuguese } = useAppContext()
  const aboutData = isPortuguese ? portugueseData : englishData

  return (
    <section className="about">
      <TextCard side="right" title={aboutData.title} paragraphs={aboutData.text} />
    </section>
  )
}