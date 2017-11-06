export const getUnixTimeNow = () => {
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);

  return timestamp
}
