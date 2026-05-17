export default function ShowPuzzleButton({ onShow }) {
  return (
    <button
      className="show-puzzle-btn"
      onClick={onShow}
      title="Toon raadsel (test)"
      aria-label="Toon raadsel"
    >
      ?
    </button>
  );
}
