import { useState } from "react";

export default function PhotoAuthenticPuzzle({ puzzle, onSolved }) {
  const { photos } = puzzle;
  const [guesses, setGuesses] = useState(Array(photos.length).fill(null));
  const [score, setScore] = useState(null);
  const [solved, setSolved] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  function handleGuess(i, isAuthentic) {
    const next = [...guesses];
    next[i] = isAuthentic;
    setGuesses(next);
    if (score !== null) setScore(null);
  }

  function handleCheck() {
    const correct = photos.filter((p, i) => guesses[i] === p.authentic).length;
    setScore(correct);
    if (correct === photos.length) {
      setSolved(true);
      setTimeout(onSolved, 800);
    }
  }

  const allSelected = guesses.every(g => g !== null);

  return (
    <div className="puzzle-interactive">
      <div className="pat-grid">
        {photos.map((photo, i) => (
          <div key={i} className="pat-item">
            <button type="button" className="pq-thumb-btn pat-thumb-btn" onClick={() => setLightbox(photo.url)}>
              <img src={photo.url} alt={`Foto ${i + 1}`} className="pat-thumb" />
            </button>
            <div className="pat-choice-row">
              <button
                type="button"
                className={`pat-choice-btn${guesses[i] === true ? " pat-selected" : ""}`}
                onClick={() => handleGuess(i, true)}
                disabled={solved}
              >
                Origineel
              </button>
              <button
                type="button"
                className={`pat-choice-btn${guesses[i] === false ? " pat-selected" : ""}`}
                onClick={() => handleGuess(i, false)}
                disabled={solved}
              >
                Bewerkt
              </button>
            </div>
          </div>
        ))}
      </div>

      {!solved && (
        <button
          className="btn-primary"
          type="button"
          onClick={handleCheck}
          disabled={!allSelected}
        >
          Controleer →
        </button>
      )}

      {score !== null && !solved && (
        <p className="pat-score">
          Je hebt <strong>{score}</strong> van de {photos.length} goed!
        </p>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Allemaal goed!
        </p>
      )}

      {lightbox && (
        <div className="po-lightbox" onClick={() => setLightbox(null)}>
          <button className="po-lightbox-close" onClick={() => setLightbox(null)} type="button" aria-label="Sluiten">✕</button>
          <img src={lightbox} alt="Foto" className="po-lightbox-img" />
        </div>
      )}
    </div>
  );
}
