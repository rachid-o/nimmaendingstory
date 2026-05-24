import { useState } from "react";

export default function PhotoOrderPuzzle({ puzzle, onSolved }) {
  const n = puzzle.photos.length;
  const labels = puzzle.photos.map(p => p.label.toUpperCase());
  const [guess, setGuess] = useState(Array(n).fill(null));
  const [activeSlot, setActiveSlot] = useState(0);
  const [history, setHistory] = useState([]);
  const [solved, setSolved] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  function countCorrect(g) {
    return g.filter((v, i) => v === puzzle.answer[i].toUpperCase()).length;
  }

  function nextEmptySlot(g, from) {
    for (let i = from + 1; i < n; i++) if (g[i] === null) return i;
    for (let i = 0; i < from; i++) if (g[i] === null) return i;
    return from;
  }

  function handleLabelClick(label) {
    if (solved) return;
    const next = [...guess];
    const existingIdx = next.indexOf(label);
    if (existingIdx !== -1) next[existingIdx] = null;
    next[activeSlot] = label;
    setGuess(next);
    setActiveSlot(nextEmptySlot(next, activeSlot));
  }

  function handleSlotClick(i) {
    if (solved) return;
    setActiveSlot(i);
  }

  function handleClear() {
    if (solved) return;
    const next = [...guess];
    next[activeSlot] = null;
    setGuess(next);
  }

  function handleSubmit() {
    if (solved) return;
    const filled = guess.map(v => v ?? "?");
    const correct = countCorrect(filled);
    setHistory(prev => [{ guess: [...filled], correct }, ...prev]);
    setGuess(Array(n).fill(null));
    setActiveSlot(0);
    if (correct === n) {
      setSolved(true);
      setTimeout(onSolved, 800);
    }
  }

  return (
    <div className="puzzle-interactive">
      <div className="po-photos-grid">
        {puzzle.photos.map((photo, i) => (
          <div key={i} className="po-photo-item">
            <span className="po-photo-label">{photo.label}</span>
            <button className="po-photo-link" onClick={() => setLightbox(photo)} type="button">
              <img src={photo.url} alt={photo.label} className="po-photo-thumb" />
            </button>
          </div>
        ))}
      </div>

      <div className="mm-slots">
        {guess.map((val, i) => (
          <button
            key={i}
            type="button"
            className={`mm-slot${i === activeSlot ? " active" : ""}${val !== null ? " filled" : ""}`}
            onClick={() => handleSlotClick(i)}
            aria-label={`Positie ${i + 1}${val !== null ? `: ${val}` : " (leeg)"}`}
          >
            {val ?? ""}
          </button>
        ))}
      </div>

      {!solved && (
        <>
          <div className="mm-palette">
            {labels.map((label) => (
              <button
                key={label}
                type="button"
                className={`mm-option-btn${guess.includes(label) ? " used" : ""}`}
                onClick={() => handleLabelClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mm-actions">
            <button
              type="button"
              className="btn-secondary mm-clear-btn"
              onClick={handleClear}
              disabled={guess[activeSlot] === null}
            >
              ⌫ Wissen
            </button>
            <button type="button" className="btn-primary mm-submit-btn" onClick={handleSubmit}>
              Controleer →
            </button>
          </div>
        </>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>🎉 Perfecte volgorde!</p>
      )}

      {history.length > 0 && (
        <div className="po-history">
          {history.map((a, i) => (
            <div key={i} className={`po-attempt-row${a.correct === n ? " all-correct" : ""}`}>
              <span className="po-guess">{a.guess.join("")}</span>
              <span className="po-result">
                {a.correct === n
                  ? "✓ Alle posities kloppen!"
                  : `${a.correct} van de ${n} ${a.correct === 1 ? "positie klopt" : "posities kloppen"}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="po-lightbox" onClick={() => setLightbox(null)}>
          <button className="po-lightbox-close" onClick={() => setLightbox(null)} type="button" aria-label="Sluiten">✕</button>
          <span className="po-lightbox-label">{lightbox.label}</span>
          <img src={lightbox.url} alt={lightbox.label} className="po-lightbox-img" />
        </div>
      )}
    </div>
  );
}
