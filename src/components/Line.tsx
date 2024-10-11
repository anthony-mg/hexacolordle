import { ReactElement } from "react";

const Line = ({ guess, color }: { guess: string; color: string }) => {
  let tiles: ReactElement[] = [];

  [...guess].map((char) => {
    tiles.push(<div className="tile">{char}</div>);
  });

  return <div className="line">{...tiles}</div>;
};

export default Line;
