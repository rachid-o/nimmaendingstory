import { useState } from "react";

function scoreSelections(selections, questions) {
  let bulls = 0;
  const selRem = [];
  const ansRem = [];
  for (let i = 0; i < questions.length; i++) {
    if (selections[i] === questions[i].answer) bulls++;
    else { selRem.push(selections[i]); ansRem.push(questions[i].answer); }
  }
  let cows = 0;
  const cnt = {};
  for (const v of ansRem) cnt[v] = (cnt[v] || 0) + 1;
  for (const v of selRem) { if (cnt[v] > 0) { cows++; cnt[v]--; } }
  return { bulls, cows };
}

export default function MultiChoicePuzzle({ puzzle, onSolved }) {
  const { questions } = puzzle;
  const [selections, setSelections] = useState(Array(questions.length).fill(null));
  const [history, setHistory] = useState([]);
  const [solved, setSolved] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  function handleSelect(qi, letter) {
    const next = [...selections];
    next[qi] = letter;
    setSelections(next);
    setOpenIndex(null);
  }

  function handleCheck() {
    const { bulls, cows } = scoreSelections(selections, questions);
    setHistory(prev => [{ selections: [...selections], bulls, cows }, ...prev]);
    if (bulls === questions.length) {
      setSolved(true);
      setTimeout(onSolved, 800);
    }
  }

  const allSelected = selections.every(s => s !== null);
  const openQ = openIndex !== null ? questions[openIndex] : null;

  return (
    <div className="puzzle-interactive">
      <div className="mc-list">
        {questions.map((q, i) => (
          <div key={i} className="mc-item">
            <button
              type="button"
              className="mc-question-btn"
              onClick={() => setOpenIndex(i)}
              disabled={solved}
            >
              <span className="mc-num">Vraag {i + 1}</span>
              <span className="mc-selection">{selections[i] ?? "—"}</span>
              <span className="mc-arrow">›</span>
            </button>
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

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Alle antwoorden kloppen!
        </p>
      )}

      {history.length > 0 && (
        <div className="mm-history">
          {history.map((entry, i) => (
            <div key={i} className="mm-history-row">
              <div className="mm-history-guess">
                {entry.selections.map((sel, j) => (
                  <span key={j} className="mm-history-cell">{sel}</span>
                ))}
              </div>
              <div className="mm-result-dots">
                {Array(entry.bulls).fill(null).map((_, j) => (
                  <span key={`b${j}`} className="mm-bull" />
                ))}
                {Array(entry.cows).fill(null).map((_, j) => (
                  <span key={`c${j}`} className="mm-cow" />
                ))}
                {Array(questions.length - entry.bulls - entry.cows).fill(null).map((_, j) => (
                  <span key={`m${j}`} className="mm-miss" />
                ))}
              </div>
              <span className="mm-history-label">
                {entry.bulls} goed <br />{entry.cows} verkeerde plek
              </span>
            </div>
          ))}
        </div>
      )}

      {openQ && (
        <div className="confirm-overlay" onClick={() => setOpenIndex(null)}>
          <div className="confirm-dialog mc-popup" onClick={e => e.stopPropagation()}>
            <p className="mc-popup-question">{openQ.question}</p>
            <div className="mc-options">
              {openQ.options.map((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                const selected = selections[openIndex] === letter;
                return (
                  <button
                    key={oi}
                    type="button"
                    className={`mc-option-btn${selected ? " mc-option-selected" : ""}`}
                    onClick={() => handleSelect(openIndex, letter)}
                  >
                    <span className="mc-option-letter">{letter}</span>
                    <span className="mc-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>
            <button className="btn-secondary" type="button" onClick={() => setOpenIndex(null)}>
              Sluiten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
