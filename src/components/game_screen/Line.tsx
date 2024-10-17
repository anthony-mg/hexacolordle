import { ReactElement } from "react";

function Line({ guess, color, isFinal }: { guess: string; color: string; isFinal: boolean }) {
  let tiles: ReactElement[] = [];
  let classes: string[] = new Array(color.length).fill("tile");
  let unused = color;
  if (isFinal) {
    for (let i = 0; i < color.length; i++) {
      if (color[i] == guess[i]) {
        classes[i] += " correct";
        unused = unused.slice(0, i) + " " + unused.slice(i + 1);
      }
    }

    for (let i = 0; i < color.length; i++) {
      let char_index = unused.indexOf(guess[i]);
      if (unused.includes(guess[i]) && unused[char_index] !== " " && classes[i] !== "tile correct") {
        classes[i] += " close";
        unused = unused.slice(0, char_index) + " " + unused.slice(char_index + 1);
      } else if (!color.includes(guess[i]) || classes[i] !== "tile correct") {
        classes[i] += " wrong";
      }
    }
  }
  classes.map((className, i) => {
    tiles.push(<div className={className}>{guess[i]}</div>);
  });
  return <div className="line">{...tiles}</div>;
}

export default Line;
