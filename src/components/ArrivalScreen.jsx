import { STOPS } from "../config/trail";

export default function ArrivalScreen({ stopIndex, onStart }) {
  const stop = STOPS[stopIndex];
  const message = stop.arrivalMessage ?? "TODO";

  return (
    <div className="screen arrival-screen">
      <div className="stop-badge">
        Stop {stopIndex + 1} / {STOPS.length}
      </div>
      <div className="arrival-icon">📍</div>
      <h2 className="arrival-name">{stop.name}</h2>
      <div className="arrival-message">
        <p>{message}</p>
      </div>
      <button className="btn-primary" onClick={onStart}>
        Start opdracht →
      </button>
    </div>
  );
}
