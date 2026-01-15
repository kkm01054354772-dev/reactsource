export type SquareProps = {
  value: null | string;
  handleClick: () => void;
};

export type Squares = (string | null)[];

export type BoardProps = {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (e: Squares) => void;
};
