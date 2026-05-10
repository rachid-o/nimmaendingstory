import { STOPS, FINAL } from "../config/trail";

export default function TestScreen({ onSelectStop, onSelectFinal, onClose }) {
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
        <button className="btn-secondary" onClick={onClose}>Sluiten</button>
      </div>
    </div>
  );
}
