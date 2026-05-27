import { useState } from "react";

function scoreGuess(guess, code) {
  let bulls = 0;
  const guessRem = [];
  const codeRem = [];
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === code[i]) bulls++;
    else { guessRem.push(guess[i]); codeRem.push(code[i]); }
  }
  let cows = 0;
  const cnt = {};
  for (const v of codeRem) cnt[v] = (cnt[v] || 0) + 1;
  for (const v of guessRem) { if (cnt[v] > 0) { cows++; cnt[v]--; } }
  return { bulls, cows };
}

export default function MastermindPuzzle({ puzzle, onSolved }) {
  const { code, options, slots } = puzzle;
  const [guess, setGuess] = useState(Array(slots).fill(null));
  const [activeSlot, setActiveSlot] = useState(0);
  const [history, setHistory] = useState([]);
  const [won, setWon] = useState(false);

  const allFilled = guess.every(v => v !== null);

  function handleOptionClick(optIdx) {
    if (won) return;
    const next = [...guess];
    next[activeSlot] = optIdx;
    setGuess(next);
    if (activeSlot < slots - 1) setActiveSlot(activeSlot + 1);
  }

  function handleSlotClick(i) {
    if (won) return;
    setActiveSlot(i);
  }

  function handleClear() {
    if (won) return;
    const next = [...guess];
    next[activeSlot] = null;
    setGuess(next);
  }

  function handleSubmit() {
    if (!allFilled || won) return;
    const { bulls, cows } = scoreGuess(guess, code);
    setHistory(prev => [{ guess: [...guess], bulls, cows }, ...prev]);
    setGuess(Array(slots).fill(null));
    setActiveSlot(0);

    if (bulls === slots) {
      setWon(true);
      setTimeout(onSolved, 1000);
    }
  }

  return (
    <div className="puzzle-interactive">
      <div className="mm-slots">
        {guess.map((val, i) => (
          <button
            key={i}
            type="button"
            className={`mm-slot${i === activeSlot ? " active" : ""}${val !== null ? " filled" : ""}`}
            onClick={() => handleSlotClick(i)}
            aria-label={`Slot ${i + 1}${val !== null ? `: ${options[val]}` : " (leeg)"}`}
          >
            {val !== null ? options[val] : ""}
          </button>
        ))}
      </div>

      {!won && (
        <>
          <div className="mm-palette">
            {options.map((label, i) => (
              <button
                key={i}
                type="button"
                className="mm-option-btn"
                onClick={() => handleOptionClick(i)}
                aria-label={label}
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
            <button
              type="button"
              className="btn-primary mm-submit-btn"
              onClick={handleSubmit}
              disabled={!allFilled}
            >
              Controleer →
            </button>
          </div>
        </>
      )}

      {won && (
        <div className="mm-game-over">
          <span className="mm-game-over-icon">🎉</span>
          <p>De code is gekraakt!</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="mm-history">
          {history.map((entry, i) => (
            <div key={i} className="mm-history-row">
              <div className="mm-history-guess">
                {entry.guess.map((v, j) => (
                  <span key={j} className="mm-history-cell">{options[v]}</span>
                ))}
              </div>
              <div className="mm-result-dots">
                {Array(entry.bulls).fill(null).map((_, j) => (
                  <span key={`b${j}`} className="mm-bull" title="Juiste positie" />
                ))}
                {Array(entry.cows).fill(null).map((_, j) => (
                  <span key={`c${j}`} className="mm-cow" title="Verkeerde positie" />
                ))}
                {Array(slots - entry.bulls - entry.cows).fill(null).map((_, j) => (
                  <span key={`m${j}`} className="mm-miss" />
                ))}
              </div>
              <span className="mm-history-label">
                {entry.bulls} goed · {entry.cows} verkeerde plek
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
