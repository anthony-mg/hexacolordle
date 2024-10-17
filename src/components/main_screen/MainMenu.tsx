import { Status } from "../../App";

function MainMenu({ setScreen }: { setScreen: React.Dispatch<React.SetStateAction<Status>> }) {
  return (
    <>
      <div className="main-menu">
        <h1>Hexacolordle</h1>
        <button onClick={() => setScreen(Status.GAME)}>Play</button>
        <button onClick={() => setScreen(Status.HOW_TO)}>How To Play</button>
      </div>
    </>
  );
}

export default MainMenu;
