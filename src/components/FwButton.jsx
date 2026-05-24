export default function FwButton({ onFw }) {
  return (
    <button
      className="skip-btn fw-btn"
      onClick={onFw}
      title="Simuleer aankomst (test)"
      aria-label="Simuleer aankomst"
    >
      ⏩
    </button>
  );
}
