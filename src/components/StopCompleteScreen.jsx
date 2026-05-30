import { STOPS } from "../config/trail";
import { catUrlForStop } from "../utils/catPhotos";

export default function StopCompleteScreen({ stopIndex, onNext }) {
  const stop = STOPS[stopIndex];
  const isLastStop = STOPS[stopIndex + 1]?.isFinal ?? stopIndex === STOPS.length - 1;
  const catUrl = stop.showCat ? catUrlForStop(stopIndex) : null;

  return (
    <div className="screen stop-complete-screen">
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
