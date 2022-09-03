import { MAX_INDEX, MIN_INDEX } from './IPosition';

export const positionClamp = (index: number) => {
  if (index < MIN_INDEX) return MIN_INDEX;
  if (index > MAX_INDEX + 1) return MAX_INDEX;

  return index;
};
