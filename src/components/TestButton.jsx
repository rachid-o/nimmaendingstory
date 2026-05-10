export default function TestButton({ onClick }) {
  return (
    <button
      className="test-btn"
      onClick={onClick}
      title="Testpagina"
      aria-label="Testpagina"
    >
      Test
    </button>
  );
}
