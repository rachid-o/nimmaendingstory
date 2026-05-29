const filenames = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

export function randomCatUrl() {
  const name = filenames[Math.floor(Math.random() * filenames.length)];
  return `${import.meta.env.BASE_URL}cats/${name}`;
}

export function catUrlForStop(stopIndex) {
  const name = filenames[stopIndex % filenames.length];
  return `${import.meta.env.BASE_URL}cats/${name}`;
}
