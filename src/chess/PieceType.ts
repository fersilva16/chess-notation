export namespace PieceType {
  export type T = 'bishop' | 'king' | 'knight' | 'pawn' | 'queen' | 'rook';

  export const toUrlMap: Record<T, string> = {
    bishop: 'b',
    king: 'k',
    knight: 'n',
    pawn: 'p',
    queen: 'q',
    rook: 'r',
  };

  export const toUrl = (type: T) => toUrlMap[type];
}
