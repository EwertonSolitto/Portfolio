import { List, X } from "@phosphor-icons/react";

export default function ShowMenuHandler(isMenuOpened: boolean) {
  if(isMenuOpened) {
    return <X size={48} color="#e8e8e8" weight="regular" aria-label="Fechar menu"/>
  } else {
    return <List size={48} color="#e8e8e8" weight="regular" aria-label="Abrir menu" />
  }
}