import LinkButton from "@/Components/LinkButton";
import GithubAndWebsiteLinks from "@/models/types/GithubAndWebsiteLinks";
import RightRow from "./RightRow";
import useAppContext from "@/hook/useAppContext";

import portugueseData from '@json/portuguese/projectButtons.json';
import englishData from '@json/english/projectButtons.json';

export default function ProjectFigureButtonsDiv({github, website}: GithubAndWebsiteLinks) {
  const { isPortuguese } = useAppContext()
  const projectButtonsData = isPortuguese ? portugueseData : englishData
  
  return (
    <div className="links">
      <LinkButton content="GitHub" style="github" link={github} ariaLabel="GitHub" >
        <RightRow />
      </LinkButton>
      <LinkButton content={projectButtonsData.website} style="website" link={website} ariaLabel={projectButtonsData.website}>
        <RightRow />
      </LinkButton>
    </div>
  )
}