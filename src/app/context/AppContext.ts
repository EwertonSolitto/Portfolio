import { createContext } from 'react'

type AppState = {
  menuButtonOpened: 0 | -1;
  handleMenuButtonOpened: () => void;
}

const appContextDefaultValues: AppState = {
  menuButtonOpened: 0,
  handleMenuButtonOpened: () => {},
}

export const AppContext = createContext<AppState>(appContextDefaultValues)
