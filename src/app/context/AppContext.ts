import { createContext } from 'react'

import AppState from '@/models/types/AppState'

const appContextDefaultValues: AppState = {
  menuButtonOpened: 0,
  handleMenuButtonOpened: () => {},
  isPortuguese: false,
  setIsPortuguese: () => {},
}

export const AppContext = createContext<AppState>(appContextDefaultValues)


