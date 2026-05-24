import { useState } from "react";

export default function PhotoOrderPuzzle({ puzzle, onSolved }) {
  const n = puzzle.photos.length;
  const labels = puzzle.photos.map(p => p.label.toUpperCase());
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  function isValidSequence(val) {
    if (val.length !== n) return false;
    const chars = val.toUpperCase().split("");
    return chars.every(c => labels.includes(c)) && new Set(chars).size === n;
  }

  function countCorrect(val) {
    return val.toUpperCase().split("").filter((ch, i) => ch === puzzle.answer[i].toUpperCase()).length;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const val = input.trim();

    if (!isValidSequence(val)) {
      setFeedback("invalid");
      setTimeout(() => setFeedback(null), 2000);
      return;
    }

    const correct = countCorrect(val);
    setAttempts(prev => [{ guess: val, correct }, ...prev]);
    setInput("");

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
            <button
              className="po-photo-link"
              onClick={() => setLightbox(photo)}
              type="button"
            >
              <img src={photo.url} alt={photo.label} className="po-photo-thumb" />
            </button>
          </div>
        ))}
      </div>

      {attempts.length > 0 && (
        <div className="po-history">
          {attempts.map((a, i) => (
            <div key={i} className={`po-attempt-row${a.correct === n ? " all-correct" : ""}`}>
              <span className="po-guess">{a.guess}</span>
              <span className="po-result">
                {a.correct === n
                  ? "✓ Alle posities kloppen!"
                  : `${a.correct} van de ${n} ${a.correct === 1 ? "positie klopt" : "posities kloppen"}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {!solved && (
        <form className="answer-form" onSubmit={handleSubmit}>
          <input
            className={`answer-input${feedback ? " input-wrong" : ""}`}
            type="text"
            value={input}
            onChange={e => {
              const valid = labels.join("");
              const re = new RegExp(`[^${valid}]`, "gi");
              setInput(e.target.value.replace(re, "").toUpperCase().slice(0, n));
            }}
            placeholder={`Volgorde (bijv. ${labels.join("")})`}
            autoComplete="off"
          />
          {feedback === "invalid" && (
            <p className="wrong-feedback">
              Voer elke letter ({labels.join("/")}) precies één keer in.
            </p>
          )}
          <button className="btn-primary" type="submit">
            Controleer →
          </button>
        </form>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Perfecte volgorde!
        </p>
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
