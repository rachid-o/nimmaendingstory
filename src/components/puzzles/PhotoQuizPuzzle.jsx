import { useState } from "react";

export default function PhotoQuizPuzzle({ puzzle, onSolved }) {
  const { photos } = puzzle;
  const [inputs, setInputs] = useState(Array(photos.length).fill(""));
  const [results, setResults] = useState(null);
  const [solved, setSolved] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  function normalize(s) { return s.trim().toLowerCase().replace(/\./g, ""); }

  function handleCheck() {
    const res = photos.map((p, i) => normalize(inputs[i]) === normalize(p.answer));
    setResults(res);
    if (res.every(Boolean)) {
      setSolved(true);
      setTimeout(onSolved, 800);
    }
  }

  function handleChange(i, value) {
    const next = [...inputs];
    next[i] = value;
    setInputs(next);
    if (results) setResults(null);
  }

  const allFilled = inputs.every(v => v.trim());

  return (
    <div className="puzzle-interactive">
      <div className="pq-list">
        {photos.map((photo, i) => (
          <div key={i} className="pq-item">
            <button className="pq-thumb-btn" type="button" onClick={() => setLightbox(photo)}>
              <img src={photo.url} alt={`Foto ${i + 1}`} className="pq-thumb" />
            </button>
            <div className="pq-input-row">
              <input
                className={`answer-input pq-input${results ? (results[i] ? " input-correct" : " input-wrong") : ""}`}
                type="text"
                value={inputs[i]}
                onChange={e => handleChange(i, e.target.value)}
                disabled={solved}
                placeholder="Welke film?"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
              {results && (
                <span className={`mq-result-icon${results[i] ? " correct" : " wrong"}`}>
                  {results[i] ? "✓" : "✗"}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {!solved && (
        <button
          className="btn-primary"
          type="button"
          onClick={handleCheck}
          disabled={!allFilled}
        >
          Controleer →
        </button>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Alle films herkend!
        </p>
      )}

      {lightbox && (
        <div className="po-lightbox" onClick={() => setLightbox(null)}>
          <button className="po-lightbox-close" onClick={() => setLightbox(null)} type="button" aria-label="Sluiten">✕</button>
          <img src={lightbox.url} alt="Film" className="po-lightbox-img" />
        </div>
      )}
    </div>
  );
}
