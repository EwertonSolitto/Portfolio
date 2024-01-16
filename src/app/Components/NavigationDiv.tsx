'use client'

import NavigationIDs from "@/models/types/NavigationIDs";
import useAppContext from "@hook/useAppContext";

import navigationIDsEnglish from "@json/english/navigationIDs.json"
import navigationIDsPortuguese from "@json/portuguese/navigationIDs.json"
import { useEffect, useState } from "react";

export default function NavigationDiv({section}: {section: NavigationIDs}) {
  const { isPortuguese } = useAppContext()
  const [ navigationIDs, setNavigationIDs ] = useState(navigationIDsPortuguese)

  let currentID = navigationIDs.about

  useEffect(() => {
    if(isPortuguese) {
        setNavigationIDs(navigationIDsPortuguese)
    } else if (isPortuguese === false) {
        setNavigationIDs(navigationIDsEnglish)
    }
  }, [isPortuguese])

  switch(section) {
    case "about":
      currentID = navigationIDs.about
      break
    case "technologies":
      currentID = navigationIDs.technologies
      break
    case "projects":
      currentID = navigationIDs.projects
      break
    case "contact":
      currentID = navigationIDs.contact
      break
  }

  return (
    <div id={currentID}></div>
  )
}