'use client'

import useAppContext from "@hook/useAppContext"

export default function Title() {
  const { isPortuguese } = useAppContext()

  return (
    <h2>{isPortuguese ? "Projetos" : "Projects"}</h2>
  )
}