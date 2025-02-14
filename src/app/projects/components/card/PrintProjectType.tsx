'use client'

import { DeviceMobile, Devices, Layout, Wrench } from "@phosphor-icons/react";

import ProjectType from "@/models/types/ProjectType";

export default function PrintProjectType(type: ProjectType) {
  const text = <p>{type}</p>
  
  switch(type) {
    case "Front-end":
      return (
        <>
          <Layout size={32} color='#0F1621' weight='fill' />
          {text}
        </>
      )
    case "Back-end":
      return (
        <>
          <Wrench size={32} color='#0F1621' weight='fill' />
          {text}
        </>
      )
    case "Fullstack":
      return (
        <>
          <Devices size={32} color='#0F1621' weight='fill' />
          {text}
        </>
      )
    case "Mobile":
      return (
        <>
          <DeviceMobile size={32} color='#0F1621' weight='fill' />
          {text}
        </>
      )
  }
}