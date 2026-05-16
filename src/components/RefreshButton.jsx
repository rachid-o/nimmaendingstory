import { useState } from "react";

async function hardReload() {
  if ("serviceWorker" in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map((r) => r.unregister()));
  }
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
  }
  window.location.reload(true);
}

export default function RefreshButton() {
  const [loading, setLoading] = useState(false);
  const [showOffline, setShowOffline] = useState(false);

  async function handleClick() {
    if (!navigator.onLine) {
      setShowOffline(true);
      setTimeout(() => setShowOffline(false), 3000);
      return;
    }
    setLoading(true);
    await hardReload();
  }

  return (
    <>
      <button
        className="refresh-btn"
        onClick={handleClick}
        disabled={loading}
        title="App verversen"
        aria-label="App verversen"
      >
        {loading ? "⏳" : "↺"}
      </button>
      {showOffline && (
        <div className="offline-toast" role="alert">
          Geen verbinding — vernieuwen werkt alleen online
        </div>
      )}
    </>
  );
}
