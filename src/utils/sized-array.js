export default function sizedArray(length = 0) {
  const lengthNum = parseInt(length, 10);
  if (isNaN(lengthNum)) {
    return [];
  }

  return [...Array(parseInt(length, 10))];
}
