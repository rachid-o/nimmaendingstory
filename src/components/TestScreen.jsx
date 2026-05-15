import { STOPS, FINAL } from "../config/trail";

const TEST_PUZZLES = [
  {
    label: "🎯 Mastermind",
    puzzle: {
      type: "mastermind",
      question: "Raad de geheime combinatie!",
      code: [0, 1, 2, 3],
      options: ["A", "B", "C", "D", "E", "F"],
      slots: 4,
      hints: ["A=1, B=2, C=3, D=4 — het antwoord is ABCD."],
    },
  },
  {
    label: "📷 Foto-antwoord",
    puzzle: {
      type: "photo-answer",
      question: "Wat staat er op elke foto? (antwoorden: natuur / stad)",
      photos: [
        { url: "https://picsum.photos/400/300?random=1", answer: "natuur" },
        { url: "https://picsum.photos/400/300?random=2", answer: "stad" },
      ],
      hints: [],
    },
  },
  {
    label: "🔢 Foto-volgorde",
    puzzle: {
      type: "photo-order",
      question: "Zet de foto's op chronologische volgorde",
      photos: [
        { label: "1", url: "https://picsum.photos/400/300?random=3" },
        { label: "2", url: "https://picsum.photos/400/300?random=4" },
        { label: "3", url: "https://picsum.photos/400/300?random=5" },
      ],
      answer: "312",
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
            <li key={stop.id}>
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
