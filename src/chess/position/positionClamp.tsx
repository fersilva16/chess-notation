const MIN_INDEX = 0;
const MAX_INDEX = 8;

export const positionClamp = (index: number) => {
  if (index < MIN_INDEX) return MIN_INDEX;
  if (index > MAX_INDEX) return MAX_INDEX;

  return index;
};
