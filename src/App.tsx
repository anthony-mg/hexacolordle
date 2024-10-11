import seedrandom from "seedrandom";
import { useState, useEffect } from "react";
import Line from "./components/Line";

function genColor(): string {
  const date = new Date();
  const rng = seedrandom(`${date.getDate()} + ${date.getMonth()} + ${date.getFullYear()}`);
  const r = Math.floor(rng() * 255)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(rng() * 255)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(rng() * 255)
    .toString(16)
    .padStart(2, "0");

  return `${r}${g}${b}`;
}

const App = () => {
  const [color, setColor] = useState("");
  const [guesses, setGuesses] = useState(new Array(7).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const valids = "0123456789abcdef";
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      if (isSolved) return;

      const key = event.key;

      if (key == "Enter") {
        if (currentGuess.length < 6) return;

        if (currentGuess == color) {
          setIsSolved(true);
        }
      }
      if (!valids.includes(key)) {
        return;
      }
      console.log(currentGuess);
      if (currentGuess.length > 5) {
        return;
      }
      setCurrentGuess(currentGuess + key);
    }

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [currentGuess, isSolved]);
  useEffect(() => {
    setColor(genColor());
  }, []);

  return (
    <>
      <div className="container">
        <div style={{ backgroundColor: `${color}` }} className="color-container"></div>
      </div>
    </>
  );
};

export default App;
