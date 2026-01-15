type BtnProps = {
  style: React.CSSProperties;
  count: number;
  onClick: () => void;
};

export default function MyButton({ style, count, onClick }: BtnProps) {
  return (
    <>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </>
  );
}
