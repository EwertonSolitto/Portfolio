import { Dispatch, SetStateAction, createContext } from 'react'

type AppState = {
  menuButtonOpened: 0 | -1;
  handleMenuButtonOpened: () => void;
  isPortuguese: boolean;
  setIsPortuguese: Dispatch<SetStateAction<boolean>>
}

const appContextDefaultValues: AppState = {
  menuButtonOpened: 0,
  handleMenuButtonOpened: () => {},
  isPortuguese: false,
  setIsPortuguese: () => {},
}

export const AppContext = createContext<AppState>(appContextDefaultValues)


