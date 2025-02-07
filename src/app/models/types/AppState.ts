import { Dispatch, SetStateAction } from "react";

import TabIndex from "./TabIndex";

type AppState = {
  menuButtonOpened: TabIndex;
  handleMenuButtonOpened: () => void;
  isPortuguese: boolean;
  setIsPortuguese: Dispatch<SetStateAction<boolean>>
}

export default AppState