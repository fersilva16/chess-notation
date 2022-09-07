import type { Dispatch, RefObject, SetStateAction } from 'react';

export const getPositionFromEvent = (
  ref: RefObject<HTMLDivElement>,
  event: MouseEvent,
  setX?: Dispatch<SetStateAction<number | undefined>>,
  setY?: Dispatch<SetStateAction<number | undefined>>,
) => {
  const pos = ref.current!.getBoundingClientRect();

  const x = (event.clientX - pos.x) / (pos.width / 8);
  const y = (event.clientY - pos.y) / (pos.height / 8);

  setX && setX(x);
  setY && setY(y);

  return {
    x,
    y,
  };
};
