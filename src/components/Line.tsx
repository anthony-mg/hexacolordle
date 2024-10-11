import { ReactElement } from "react";

const Line = ({ guess, color, isFinal }: { guess: string; color: string; isFinal: boolean }) => {
  let tiles: ReactElement[] = [];

  let colorChecker = color;

  for (let i = 0; i < color.length; i++) {
    let className = "tile";
    if (isFinal) {
      if (color[i] == guess[i]) {
        className += " correct";
        colorChecker = colorChecker.replace(guess[i], "");
      } else if (colorChecker.includes(guess[i])) {
        colorChecker = colorChecker.replace(guess[i], "");
        className += " close";
      } else {
        className += " wrong";
      }
    }
    tiles.push(<div className={className}>{guess[i]}</div>);
  }

  return <div className="line">{...tiles}</div>;
};

export default Line;
