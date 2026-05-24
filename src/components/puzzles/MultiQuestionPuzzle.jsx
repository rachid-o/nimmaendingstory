import { useState } from "react";

export default function MultiQuestionPuzzle({ puzzle, onSolved }) {
  const { questions } = puzzle;
  const [inputs, setInputs] = useState(Array(questions.length).fill(""));
  const [results, setResults] = useState(null);
  const [solved, setSolved] = useState(false);

  function isCorrect(input, answers) {
    const trimmed = input.trim().toLowerCase();
    return answers.some(a => a.toLowerCase() === trimmed);
  }

  function handleCheck() {
    const res = questions.map((q, i) => isCorrect(inputs[i], q.answers));
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
      <div className="mq-list">
        {questions.map((q, i) => (
          <div key={i} className="mq-item">
            <label className="mq-label">{q.question}</label>
            <div className="mq-input-row">
              <input
                className={`answer-input mq-input${results ? (results[i] ? " input-correct" : " input-wrong") : ""}`}
                type="text"
                value={inputs[i]}
                onChange={e => handleChange(i, e.target.value)}
                disabled={solved}
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
          🎉 Alle antwoorden kloppen!
        </p>
      )}
    </div>
  );
}
