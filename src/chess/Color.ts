export namespace Color {
  export type T = 'black' | 'white';

  export const toUrlMap: Record<T, string> = {
    black: 'b',
    white: 'w',
  };

  export const toUrl = (color: T) => toUrlMap[color];
}
