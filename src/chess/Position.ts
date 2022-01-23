export namespace Position {
  export type T = {
    row: Index;
    column: Index;
  };

  export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

  export const MIN_INDEX = 0;
  export const MAX_INDEX = 8;

  export const create = (row: Index, column: Index): T => ({ row, column });

  export const clamp = (index: number) => {
    if (index < MIN_INDEX) return MIN_INDEX;
    if (index > MAX_INDEX) return MAX_INDEX;

    return index;
  };
}
