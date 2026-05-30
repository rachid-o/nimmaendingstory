import { useState } from "react";
import { STOPS } from "../config/trail";
import { randomCatUrl } from "../utils/catPhotos";

export default function FinalScreen() {
  const stop = STOPS[STOPS.length - 1];
  const hints = stop.hints ?? [];
  const [catUrl] = useState(() => randomCatUrl());
  const [hintsShown, setHintsShown] = useState(0);
  const [showHintOverlay, setShowHintOverlay] = useState(false);

  function handleHintOpen() {
    if (hintsShown === 0) setHintsShown(1);
    setShowHintOverlay(true);
  }

  return (
    <div className="screen final-arrived-screen">
      <div className="fireworks">🎉</div>
      <h1>{stop.name}</h1>
      <div className="final-message">
        {stop.arrivalMessage.split("\n").map((line, i) =>
          line ? <p key={i}>{line}</p> : <br key={i} />
        )}
      </div>

      {hints.length > 0 && (
        <button className="btn-hint" onClick={handleHintOpen}>
          💡 {hintsShown === 0 ? "Hint tonen" : "Hints bekijken"}
        </button>
      )}

      {showHintOverlay && (
        <div className="confirm-overlay" onClick={() => setShowHintOverlay(false)}>
          <div className="confirm-dialog hint-overlay-dialog" onClick={e => e.stopPropagation()}>
            <p className="hint-overlay-title">💡 {hints.length > 1 ? "Hints" : "Hint"}</p>
            <div className="hint-overlay-list">
              {hints.slice(0, hintsShown).map((hint, i) => {
                const text = typeof hint === "string" ? hint : hint.text;
                const image = typeof hint === "object" ? hint.image : null;
                return (
                  <div className="hint-box" key={i}>
                    {hints.length > 1 && <span className="hint-label">Hint {i + 1}</span>}
                    {text && <p>{text}</p>}
                    {image && <img src={`${import.meta.env.BASE_URL}${image}`} alt="hint" className="hint-image" />}
                  </div>
                );
              })}
            </div>
            {hintsShown < hints.length && (
              <button className="btn-hint" onClick={() => setHintsShown(n => n + 1)}>
                💡 Volgende hint
              </button>
            )}
            <button className="btn-secondary" onClick={() => setShowHintOverlay(false)}>
              Sluiten
            </button>
          </div>
        </div>
      )}

      <img src={catUrl} alt="Een lieve kat voor jullie" className="cat-reward" />
    </div>
  );
}
