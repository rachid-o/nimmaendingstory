import { useState } from "react";
import { STOPS } from "../config/trail";
import { randomCatUrl } from "../utils/catPhotos";

export default function FinalScreen() {
  const stop = STOPS[STOPS.length - 1];
  const [catUrl] = useState(() => randomCatUrl());

  return (
    <div className="screen final-arrived-screen">
      <div className="fireworks">🎉</div>
      <h1>{stop.name}</h1>
      <div className="final-message">
        {stop.arrivalMessage.split("\n").map((line, i) =>
          line ? <p key={i}>{line}</p> : <br key={i} />
        )}
      </div>
      <img src={catUrl} alt="Een lieve kat voor jullie" className="cat-reward" />
    </div>
  );
}
