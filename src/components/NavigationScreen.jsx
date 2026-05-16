import { useEffect, useRef, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useCompass } from "../hooks/useCompass";
import { haversineDistance, calculateBearing, formatDistance } from "../utils/geo";
import { STOPS } from "../config/trail";

// Always rotate the shortest way (avoids spinning 340° instead of 20°)
function shortestPath(from, to) {
  const diff = ((to - from + 180) % 360 + 360) % 360 - 180;
  return from + diff;
}

export default function NavigationScreen({ stopIndex, onArrived, debugMode }) {
  const stop = STOPS[stopIndex];
  const { position, error: gpsError } = useGeolocation();
  const { heading, permissionNeeded, requestPermission, compassAvailable } = useCompass();
  const prevRotationRef = useRef(null);
  const [showCheat, setShowCheat] = useState(false);
  const [cheatInput, setCheatInput] = useState("");
  const [cheatError, setCheatError] = useState(false);

  const distance = position
    ? haversineDistance(position.lat, position.lng, stop.lat, stop.lng)
    : null;

  const bearing = position
    ? calculateBearing(position.lat, position.lng, stop.lat, stop.lng)
    : null;

  const rawRotation =
    bearing !== null && heading !== null ? bearing - heading : bearing ?? 0;

  const arrowRotation =
    prevRotationRef.current === null
      ? rawRotation
      : shortestPath(prevRotationRef.current, rawRotation);
  prevRotationRef.current = arrowRotation;

  useEffect(() => {
    if (distance !== null && distance <= stop.arrivalRadius) {
      onArrived();
    }
  }, [distance, stop.arrivalRadius, onArrived]);

  function handleCheatSubmit(e) {
    e.preventDefault();
    if (cheatInput.trim().toLowerCase() === stop.cheatCode) {
      setShowCheat(false);
      onArrived();
    } else {
      setCheatError(true);
      setCheatInput("");
      setTimeout(() => setCheatError(false), 1500);
    }
  }

  return (
    <div className="screen navigation-screen">
      <div className="stop-badge">
        Stop {stopIndex + 1} / {STOPS.length}
      </div>

      <h2>Volg het kompas</h2>

      {permissionNeeded && (
        <button className="btn-secondary" onClick={requestPermission}>
          Activeer kompas
        </button>
      )}

      <div className="compass-container">
        <div
          className="compass-arrow"
          style={{ transform: `rotate(${arrowRotation}deg)` }}
        >
          <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 15,145 50,115 85,145" fill="#d4a017" />
          </svg>
        </div>
      </div>

      <div className="distance-display">
        {gpsError ? (
          <p className="error-text">{gpsError}</p>
        ) : distance !== null ? (
          <>
            <span className="distance-value">{formatDistance(distance)}</span>
            <span className="distance-label">nog te gaan</span>
          </>
        ) : (
          <p className="loading-text">GPS bepalen…</p>
        )}
      </div>

      <p className="nav-hint">
        Houd je telefoon horizontaal voor het beste kompas-resultaat.
      </p>

      {compassAvailable === false && (
        <p className="nav-hint" style={{ color: "#e07b39" }}>
          Kompas niet beschikbaar op dit apparaat — gebruik de afstandsindicator als leidraad.
        </p>
      )}

      <button className="cheat-btn" onClick={() => { setShowCheat(true); setCheatInput(""); setCheatError(false); }}>
        noodcode
      </button>

      {debugMode && (
        <div className="debug-badge">{stop.name} · aankomstradius: {stop.arrivalRadius} m</div>
      )}

      {showCheat && (
        <div className="confirm-overlay" onClick={() => setShowCheat(false)}>
          <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
            <p style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", fontWeight: 600 }}>Noodcode</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>App Suus & Rachid voor de code van deze stop.</p>
            <form onSubmit={handleCheatSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                className={`answer-input${cheatError ? " input-wrong" : ""}`}
                type="text"
                value={cheatInput}
                onChange={e => setCheatInput(e.target.value)}
                placeholder="4-cijferige code…"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                autoFocus
                maxLength={4}
              />
              <button className="btn-primary" type="submit" disabled={!cheatInput.trim()}>
                Controleer →
              </button>
            </form>
            {cheatError && <p style={{ color: "var(--red)", fontSize: "0.9rem" }}>Verkeerde code. Probeer opnieuw.</p>}
            <button className="btn-secondary" onClick={() => setShowCheat(false)}>Sluiten</button>
          </div>
        </div>
      )}
    </div>
  );
}
