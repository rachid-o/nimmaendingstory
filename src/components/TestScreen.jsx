import { STOPS, FINAL } from "../config/trail";

const TEST_PUZZLES = [
  {
    label: "📷 Foto-antwoord",
    puzzle: {
      type: "photo-answer",
      question: "Wat staat er op elke foto? (antwoorden: natuur / stad)",
      photos: [
        { url: "https://picsum.photos/id/15/400/300", answer: "natuur" },
        { url: "https://picsum.photos/id/42/400/300", answer: "stad" },
      ],
      hints: [],
    },
  },
];

export default function TestScreen({ onSelectStop, onSelectFinal, onClose, onPreviewPuzzle }) {
  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="confirm-dialog test-screen-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>Testpagina</h3>
        <p className="test-screen-hint">Kies een locatie om naartoe te navigeren</p>
        <ul className="test-stop-list">
          {STOPS.map((stop, index) => (
            <li key={index}>
              <button className="test-stop-btn" onClick={() => onSelectStop(index)}>
                <span className="test-stop-num">{index + 1}</span>
                <span className="test-stop-name">{stop.name}</span>
                <span className="test-stop-radius">{stop.arrivalRadius} m</span>
              </button>
            </li>
          ))}
          <li>
            <button className="test-stop-btn test-stop-final" onClick={onSelectFinal}>
              <span className="test-stop-num">🏁</span>
              <span className="test-stop-name">Eindlocatie</span>
              <span className="test-stop-radius">{FINAL.arrivalRadius} m</span>
            </button>
          </li>
        </ul>

        {onPreviewPuzzle && (
          <div className="test-puzzle-section">
            <h4>Nieuwe puzzeltypen testen</h4>
            <ul className="test-stop-list">
              {TEST_PUZZLES.map((item, i) => (
                <li key={i}>
                  <button
                    className="test-puzzle-btn"
                    onClick={() => onPreviewPuzzle(item.puzzle)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="btn-secondary" onClick={onClose}>Sluiten</button>
      </div>
    </div>
  );
}
