export const changeArrayIndex = <I,>(array: I[], index: number, item: I) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index + 1),
];
