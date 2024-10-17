import { Status } from "../../App";

function HowTo({ setScreen }: { setScreen: React.Dispatch<React.SetStateAction<Status>> }) {
  return (
    <>
      <div className="how-to">
        <p>Guess the hexadecimal color code of the color in the box shown. You have 7 guesses.</p>
        <p>{"Green --> Correct symbol, correct spot."}</p>
        <p>{"Yellow --> Correct symbol, wrong spot."}</p>
        <p>{"Dark Grey --> Wrong symbol, wrong spot."}</p>
        <button onClick={() => setScreen(Status.MAIN_MENU)}>Back</button>
      </div>
    </>
  );
}

export default HowTo;
