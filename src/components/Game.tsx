import { useState, useEffect } from "react";
import seedrandom from "seedrandom";
import Line from "./Line";

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
  console.log(`${r}${g}${b}`);
  return `${r}${g}${b}`;
}

const Game = () => {
  const [color, setColor] = useState("");
  const [guesses, setGuesses] = useState(new Array<string>(7).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isOver, setIsOver] = useState(false);
  const valids = "0123456789abcdef";
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      if (isOver) return;

      const key = event.key;

      if (key == "Enter") {
        if (currentGuess.length < 6) return;

        if (currentGuess === color) {
          setIsOver(true);
        }

        let newGuesses: string[] = [...guesses];
        let lastIndex = newGuesses.findIndex((value) => value == "");
        newGuesses[lastIndex] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");
        return;
      }

      if (key == "Backspace") {
        if (currentGuess.length > 0) {
          setCurrentGuess(currentGuess.slice(0, -1));
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
  }, [currentGuess, isOver]);
  useEffect(() => {
    setColor(genColor());
  }, []);

  return (
    <>
      <div className="container">
        <div style={{ backgroundColor: `#${color}` }} className="color-container"></div>
        <div className="board">
          {guesses.map((guess, i) => {
            const isCurrentGuess = i == guesses.findIndex((value) => value == "");
            const isFinal = !isCurrentGuess && guess !== "";
            return <Line key={i} guess={isCurrentGuess ? currentGuess : guess} color={color} isFinal={isFinal} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
