import { useState } from "react";
import { STOPS } from "../config/trail";
import { randomCatUrl } from "../utils/catPhotos";

export default function StopCompleteScreen({ stopIndex, onNext }) {
  const stop = STOPS[stopIndex];
  const isLastStop = stopIndex === STOPS.length - 1;
  const [catUrl] = useState(() => stop.showCat ? randomCatUrl() : null);

  return (
    <div className="screen stop-complete-screen">
      <div className="complete-icon">🏆</div>
      <h2>{stop.completeMessage}</h2>

      {catUrl && (
        <img src={catUrl} alt="Een lieve kat voor jullie" className="cat-reward" />
      )}

      <div className="progress-dots">
        {STOPS.map((_, i) => (
          <div key={i} className={`progress-dot ${i <= stopIndex ? "done" : ""}`} />
        ))}
      </div>

      <button className="btn-primary" onClick={onNext}>
        {isLastStop ? "Naar de finale verrassing →" : "Volgende stop →"}
      </button>
    </div>
  );
}
