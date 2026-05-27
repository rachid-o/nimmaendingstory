import { useState } from "react";

export default function MultiChoicePuzzle({ puzzle, onSolved }) {
  const { questions } = puzzle;
  const [selections, setSelections] = useState(Array(questions.length).fill(null));
  const [results, setResults] = useState(null);
  const [solved, setSolved] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  function handleSelect(qi, letter) {
    const next = [...selections];
    next[qi] = letter;
    setSelections(next);
    if (results) setResults(null);
    setOpenIndex(null);
  }

  function handleCheck() {
    const res = questions.map((q, i) => selections[i] === q.answer);
    setResults(res);
    if (res.every(Boolean)) {
      setSolved(true);
      setTimeout(onSolved, 800);
    }
  }

  const allSelected = selections.every(s => s !== null);
  const openQ = openIndex !== null ? questions[openIndex] : null;

  return (
    <div className="puzzle-interactive">
      <div className="mc-list">
        {questions.map((q, i) => {
          const resultClass = results ? (results[i] ? " mc-correct" : " mc-wrong") : "";
          return (
            <div key={i} className={`mc-item${resultClass}`}>
              <button
                type="button"
                className="mc-question-btn"
                onClick={() => setOpenIndex(i)}
                disabled={solved}
              >
                <span className="mc-num">Vraag {i + 1}</span>
                <span className="mc-selection">{selections[i] ?? "—"}</span>
                {results && (
                  <span className={`mq-result-icon${results[i] ? " correct" : " wrong"}`}>
                    {results[i] ? "✓" : "✗"}
                  </span>
                )}
                <span className="mc-arrow">›</span>
              </button>
            </div>
          );
        })}
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
