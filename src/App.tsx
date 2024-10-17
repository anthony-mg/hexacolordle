import Game from "./components/game_screen/Game";
import { useState } from "react";
import MainMenu from "./components/main_screen/MainMenu";
import HowTo from "./components/how_to/HowTo";
export enum Status {
  MAIN_MENU,
  HOW_TO,
  GAME,
}

const App = () => {
  function renderScreen(screen: Status) {
    switch (screen) {
      case Status.MAIN_MENU:
        return <MainMenu setScreen={setScreen} />;
      case Status.HOW_TO:
        return <HowTo setScreen={setScreen} />;
      case Status.GAME:
        return <Game />;

      default:
        console.assert(false, "This should never happen");
    }
  }
  const [screen, setScreen] = useState<Status>(Status.MAIN_MENU);

  return <>{renderScreen(screen)}</>;
};

export default App;
