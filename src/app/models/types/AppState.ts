import { Dispatch, SetStateAction } from "react";

type AppState = {
  menuButtonOpened: 0 | -1;
  handleMenuButtonOpened: () => void;
  isPortuguese: boolean;
  setIsPortuguese: Dispatch<SetStateAction<boolean>>
}

export default AppState