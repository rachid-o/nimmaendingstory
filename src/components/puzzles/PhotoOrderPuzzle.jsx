import { useState } from "react";

export default function PhotoOrderPuzzle({ puzzle, onSolved }) {
  const n = puzzle.photos.length;
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);

  function isValidSequence(val) {
    if (val.length !== n) return false;
    const digits = val.split("").map(Number);
    if (digits.some(d => isNaN(d) || d < 1 || d > n)) return false;
    const seen = new Set(digits);
    return seen.size === n;
  }

  function countCorrect(val) {
    return val.split("").filter((ch, i) => ch === puzzle.answer[i]).length;
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
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="po-photo-link"
            >
              📷
            </a>
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
            inputMode="numeric"
            value={input}
            onChange={e => setInput(e.target.value.replace(/[^0-9]/g, "").slice(0, n))}
            placeholder={`Volgorde (bijv. ${puzzle.answer})`}
            autoComplete="off"
          />
          {feedback === "invalid" && (
            <p className="wrong-feedback">
              Voer elk getal van 1 t/m {n} precies één keer in.
            </p>
          )}
          <button className="btn-primary" type="submit" disabled={input.length !== n}>
            Controleer →
          </button>
        </form>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Perfecte volgorde!
        </p>
      )}
    </div>
  );
}
