import { useState } from "react";

export default function LogicGridPuzzle({ puzzle, onSolved }) {
  const { clues, columns, rowGroups, answer } = puzzle;

  const [cells, setCells] = useState(() =>
    rowGroups.map(g => g.rows.map(() => columns.map(() => null)))
  );
  const [feedback, setFeedback] = useState(null);
  const [solved, setSolved] = useState(false);

  function cycle(g, r, c) {
    if (solved) return;
    setCells(prev => {
      const next = prev.map(grp => grp.map(row => [...row]));
      const cur = next[g][r][c];
      next[g][r][c] = cur === null ? "yes" : cur === "yes" ? "no" : null;
      return next;
    });
    if (feedback) setFeedback(null);
  }

  function handleCheck() {
    let correct = true;
    outer: for (let g = 0; g < rowGroups.length; g++) {
      for (let r = 0; r < rowGroups[g].rows.length; r++) {
        for (let c = 0; c < columns.length; c++) {
          if ((answer[g][r][c] === true) !== (cells[g][r][c] === "yes")) {
            correct = false;
            break outer;
          }
        }
      }
    }
    if (correct) {
      setSolved(true);
      setTimeout(onSolved, 800);
    } else {
      setFeedback("wrong");
    }
  }

  const gridStyle = { gridTemplateColumns: `1fr repeat(${columns.length}, var(--lg-cell-size))` };

  return (
    <div className="puzzle-interactive">
      <ul className="lg-clues">
        {clues.map((clue, i) => (
          <li key={i} className="lg-clue">{clue}</li>
        ))}
      </ul>

      <div className="lg-table">
        <div className="lg-header-row" style={gridStyle}>
          <div />
          {columns.map((col, c) => (
            <div key={c} className="lg-col-header">{col}</div>
          ))}
        </div>

        {rowGroups.map((group, g) => (
          <div key={g} className="lg-group">
            <div className="lg-group-label">{group.label}</div>
            {group.rows.map((row, r) => (
              <div key={r} className="lg-row" style={gridStyle}>
                <div className="lg-row-label">{row}</div>
                {columns.map((col, c) => {
                  const val = cells[g][r][c];
                  return (
                    <button
                      key={c}
                      type="button"
                      className={`lg-cell${val === "yes" ? " lg-yes" : val === "no" ? " lg-no" : ""}`}
                      onClick={() => cycle(g, r, c)}
                      disabled={solved}
                      aria-label={`${row} × ${col}`}
                    >
                      {val === "yes" ? "✓" : val === "no" ? "✗" : ""}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      {feedback === "wrong" && (
        <p className="wrong-feedback">Nog niet helemaal goed, probeer het nog eens!</p>
      )}

      {solved && (
        <p className="pa-check" style={{ fontSize: "1.2rem" }}>
          🎉 Jullie hebben het opgelost!
        </p>
      )}

      {!solved && (
        <button className="btn-primary" type="button" onClick={handleCheck}>
          Controleer →
        </button>
      )}
    </div>
  );
}
