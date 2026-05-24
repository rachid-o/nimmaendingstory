import { useState } from "react";
import { STOPS } from "../config/trail";
import MastermindPuzzle from "./puzzles/MastermindPuzzle";
import PhotoAnswerPuzzle from "./puzzles/PhotoAnswerPuzzle";
import PhotoOrderPuzzle from "./puzzles/PhotoOrderPuzzle";


export default function PuzzleScreen({ stopIndex, onSolved, overridePuzzle, onClose }) {
  const isPreview = !!overridePuzzle;
  const puzzle = overridePuzzle ?? STOPS[stopIndex].puzzle;
  const hints = puzzle.hints ?? (puzzle.hint ? [puzzle.hint] : []);

  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [hintsShown, setHintsShown] = useState(0);
  const [showHintOverlay, setShowHintOverlay] = useState(false);

  function handleHintOpen() {
    if (hintsShown === 0) setHintsShown(1);
    setShowHintOverlay(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (trimmed === puzzle.answer.toLowerCase()) {
      setFeedback(null);
      onSolved();
    } else {
      setFeedback("wrong");
      setInput("");
      setTimeout(() => setFeedback(null), 1500);
    }
  }

  return (
    <div className="screen puzzle-screen">
      {isPreview ? (
        <button className="btn-secondary puzzle-preview-close" type="button" onClick={onClose}>
          × Sluiten
        </button>
      ) : (
        <div className="stop-badge">
          Stop {stopIndex + 1} / {STOPS.length}
        </div>
      )}

      <div className="puzzle-box">
        <p className="puzzle-question">{puzzle.question}</p>
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
              {hints.slice(0, hintsShown).map((text, i) => (
                <div className="hint-box" key={i}>
                  {hints.length > 1 && <span className="hint-label">Hint {i + 1}</span>}
                  <p>{text}</p>
                </div>
              ))}
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

      {puzzle.type === "mastermind" ? (
        <MastermindPuzzle puzzle={puzzle} onSolved={onSolved} />
      ) : puzzle.type === "photo-answer" ? (
        <PhotoAnswerPuzzle puzzle={puzzle} onSolved={onSolved} />
      ) : puzzle.type === "photo-order" ? (
        <PhotoOrderPuzzle puzzle={puzzle} onSolved={onSolved} />
      ) : (
        <>
          <form className="answer-form" onSubmit={handleSubmit}>
            <input
              className={`answer-input ${feedback === "wrong" ? "input-wrong" : ""}`}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Jouw antwoord…"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
            <button className="btn-primary" type="submit" disabled={!input.trim()}>
              Controleer →
            </button>
          </form>
          {feedback === "wrong" && (
            <p className="wrong-feedback">Helaas, dat is niet goed. Probeer het nog eens!</p>
          )}
        </>
      )}
    </div>
  );
}
