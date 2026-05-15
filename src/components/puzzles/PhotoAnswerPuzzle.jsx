import { useState, useEffect } from "react";

export default function PhotoAnswerPuzzle({ puzzle, onSolved }) {
  const [rows, setRows] = useState(puzzle.photos.map(() => ({ input: "", status: "idle" })));

  useEffect(() => {
    if (rows.length > 0 && rows.every(r => r.status === "correct")) {
      const t = setTimeout(onSolved, 800);
      return () => clearTimeout(t);
    }
  }, [rows, onSolved]);

  function handleCheck(i) {
    const correct = rows[i].input.trim().toLowerCase() === puzzle.photos[i].answer.toLowerCase();
    setRows(prev => {
      const next = [...prev];
      next[i] = { ...next[i], status: correct ? "correct" : "wrong" };
      return next;
    });
    if (!correct) {
      setTimeout(() => {
        setRows(prev => {
          const next = [...prev];
          if (next[i].status === "wrong") next[i] = { ...next[i], status: "idle" };
          return next;
        });
      }, 1200);
    }
  }

  return (
    <div className="puzzle-interactive pa-list">
      {puzzle.photos.map((photo, i) => {
        const row = rows[i];
        return (
          <div key={i} className="pa-row">
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pa-photo-link"
            >
              📷 Foto {i + 1}
            </a>
            <div className="pa-input-wrap">
              <input
                className={`pa-input${row.status === "correct" ? " correct" : row.status === "wrong" ? " wrong" : ""}`}
                type="text"
                value={row.input}
                onChange={e => {
                  if (row.status === "correct") return;
                  const next = [...rows];
                  next[i] = { ...next[i], input: e.target.value };
                  setRows(next);
                }}
                onKeyDown={e => { if (e.key === "Enter" && row.input.trim()) handleCheck(i); }}
                placeholder="Antwoord…"
                readOnly={row.status === "correct"}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            {row.status === "correct" ? (
              <span className="pa-check">✓</span>
            ) : (
              <button
                type="button"
                className="btn-secondary pa-submit-btn"
                onClick={() => handleCheck(i)}
                disabled={!row.input.trim()}
              >
                OK
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
