import { useState } from "react";
import { STOPS } from "../config/trail";
import FwButton from "./FwButton";
import MastermindPuzzle from "./puzzles/MastermindPuzzle";
import MultiQuestionPuzzle from "./puzzles/MultiQuestionPuzzle";
import PhotoAnswerPuzzle from "./puzzles/PhotoAnswerPuzzle";
import PhotoOrderPuzzle from "./puzzles/PhotoOrderPuzzle";
import PhotoAuthenticPuzzle from "./puzzles/PhotoAuthenticPuzzle";
import LogicGridPuzzle from "./puzzles/LogicGridPuzzle";
import PhotoQuizPuzzle from "./puzzles/PhotoQuizPuzzle";
import MultiChoicePuzzle from "./puzzles/MultiChoicePuzzle";


export default function PuzzleScreen({ stopIndex, onSolved, overridePuzzle, onClose, debugMode }) {
  const isPreview = !!overridePuzzle;
  const puzzle = overridePuzzle ?? STOPS[stopIndex].puzzle;
  const hints = puzzle.hints ?? (puzzle.hint ? [puzzle.hint] : []);

  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [hintsShown, setHintsShown] = useState(0);
  const [showHintOverlay, setShowHintOverlay] = useState(false);
  const [puzzleDone, setPuzzleDone] = useState(false);

  function handlePuzzleSolved() {
    setPuzzleDone(true);
  }

  function handleHintOpen() {
    if (hintsShown === 0) setHintsShown(1);
    setShowHintOverlay(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (trimmed === puzzle.answer.toLowerCase()) {
      setFeedback(null);
      setPuzzleDone(true);
    } else {
      setFeedback("wrong");
      setInput("");
      setTimeout(() => setFeedback(null), 1500);
    }
  }

  return (
    <div className="screen puzzle-screen">
      {debugMode && !isPreview && <FwButton onFw={onSolved} />}
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

      {puzzle.type === "mastermind" ? (
        <MastermindPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "multi" ? (
        <MultiQuestionPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "photo-answer" ? (
        <PhotoAnswerPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "photo-quiz" ? (
        <PhotoQuizPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "photo-order" ? (
        <PhotoOrderPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "photo-authentic" ? (
        <PhotoAuthenticPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "multi-choice" ? (
        <MultiChoicePuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
      ) : puzzle.type === "logic-grid" ? (
        <LogicGridPuzzle puzzle={puzzle} onSolved={handlePuzzleSolved} />
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
            {!puzzleDone && (
              <button className="btn-primary" type="submit" disabled={!input.trim()}>
                Controleer →
              </button>
            )}
          </form>
          {feedback === "wrong" && (
            <p className="wrong-feedback">Helaas, dat is niet goed. Probeer het nog eens!</p>
          )}
        </>
      )}

      {puzzleDone && (
        <button className="btn-primary puzzle-continue-btn" type="button" onClick={onSolved}>
          Verder →
        </button>
      )}
    </div>
  );
}
