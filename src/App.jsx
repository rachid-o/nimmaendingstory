import { useCallback, useEffect, useState } from "react";
import { useWakeLock } from "./hooks/useWakeLock";
import { useProgress } from "./hooks/useProgress";
import PinScreen from "./components/PinScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import NavigationScreen from "./components/NavigationScreen";
import PuzzleScreen from "./components/PuzzleScreen";
import StopCompleteScreen from "./components/StopCompleteScreen";
import FinalScreen from "./components/FinalScreen";
import RefreshButton from "./components/RefreshButton";
import ResetButton from "./components/ResetButton";
import FwButton from "./components/FwButton";
import TipsButton from "./components/TipsButton";
import TestButton from "./components/TestButton";
import TestScreen from "./components/TestScreen";
import { STOPS, FINAL } from "./config/trail";

export default function App() {
  useWakeLock();
  const { progress, update } = useProgress();
  const [showTest, setShowTest] = useState(false);
  const [previewPuzzle, setPreviewPuzzle] = useState(null);
  const { screen, currentStopIndex, finalArrived, debugMode } = progress;

  const handlePinSuccess = useCallback((isDebug) => {
    update({ pinVerified: true, screen: "welcome", debugMode: !!isDebug });
  }, [update]);

  const handleStart = useCallback(() => {
    update({ welcomeSeen: true, screen: "navigate" });
  }, [update]);

  const handleArrived = useCallback(() => {
    update({ screen: "puzzle" });
  }, [update]);

  const handleSolved = useCallback(() => {
    update({ screen: "stopComplete" });
  }, [update]);

  const handleNextStop = useCallback(() => {
    const nextIndex = currentStopIndex + 1;
    if (nextIndex >= STOPS.length) {
      update({ screen: "final" });
    } else {
      update({ currentStopIndex: nextIndex, screen: "navigate" });
    }
  }, [update, currentStopIndex]);

  const handleFinalArrived = useCallback(() => {
    update({ finalArrived: true });
  }, [update]);

  useEffect(() => {
    const stopScreens = ["navigate", "puzzle", "stopComplete"];
    if (stopScreens.includes(screen) && currentStopIndex >= STOPS.length) {
      update({ screen: "final" });
    }
  }, [screen, currentStopIndex, update]);

  const validStop = currentStopIndex < STOPS.length;

  let content = null;
  if (screen === "pin") content = <PinScreen onSuccess={handlePinSuccess} />;
  else if (screen === "welcome") content = <WelcomeScreen onStart={handleStart} />;
  else if (screen === "navigate" && validStop)
    content = <NavigationScreen stopIndex={currentStopIndex} onArrived={handleArrived} debugMode={debugMode} />;
  else if (screen === "puzzle" && validStop)
    content = (
      <PuzzleScreen
        stopIndex={currentStopIndex}
        onSolved={handleSolved}
      />
    );
  else if (screen === "stopComplete" && validStop)
    content = <StopCompleteScreen stopIndex={currentStopIndex} onNext={handleNextStop} />;
  else if (screen === "final")
    content = <FinalScreen arrived={!!finalArrived} onArrived={handleFinalArrived} />;

  const mainContent = previewPuzzle ? (
    <PuzzleScreen
      overridePuzzle={previewPuzzle}
      onSolved={() => setPreviewPuzzle(null)}
      onClose={() => setPreviewPuzzle(null)}
    />
  ) : content;

  const showSkip = debugMode && (screen === "navigate" || screen === "final");

  function handleTestSelectStop(index) {
    update({ currentStopIndex: index, screen: "navigate" });
    setShowTest(false);
  }

  function handleTestSelectFinal() {
    update({ screen: "final" });
    setShowTest(false);
  }

  return (
    <>
      <RefreshButton />
      <ResetButton />
      <TipsButton />
      {showSkip && screen === "navigate" && validStop && (
        <FwButton onFw={handleArrived} />
      )}
      {debugMode && <TestButton onClick={() => setShowTest(true)} />}
      {showTest && (
        <TestScreen
          onSelectStop={handleTestSelectStop}
          onSelectFinal={handleTestSelectFinal}
          onClose={() => setShowTest(false)}
          onPreviewPuzzle={(puzzle) => { setPreviewPuzzle(puzzle); setShowTest(false); }}
        />
      )}
      {mainContent}
      {debugMode && (
        <div className="debug-footer">
          {screen === "navigate" && validStop ? (
            <a
              className="debug-maps-link"
              href={`https://maps.google.com/?q=${STOPS[currentStopIndex].lat},${STOPS[currentStopIndex].lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🗺 Google Maps
            </a>
          ) : screen === "final" ? (
            <a
              className="debug-maps-link"
              href={`https://maps.google.com/?q=${FINAL.lat},${FINAL.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🗺 Google Maps
            </a>
          ) : (
            <span />
          )}
          <span className="debug-build">build {__BUILD_TIME__}</span>
        </div>
      )}
    </>
  );
}
