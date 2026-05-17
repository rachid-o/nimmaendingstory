const filenames = [
  "signal-2026-05-17-124050.jpg",
  "signal-2026-05-17-124107.jpg",
  "signal-2026-05-17-124125.jpg",
  "signal-2026-05-17-124150.jpg",
  "signal-2026-05-17-124218.jpg",
  "signal-2026-05-17-124237.jpg",
  "signal-2026-05-17-124321.jpg",
  "signal-2026-05-17-124409.jpg",
];

export function randomCatUrl() {
  const name = filenames[Math.floor(Math.random() * filenames.length)];
  return `${import.meta.env.BASE_URL}cats/${name}`;
}
