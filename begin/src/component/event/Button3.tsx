import type { ReactNode } from 'react';

function PlayButton({ moviename }: { moviename: string }) {
  // 영화명을 같이 출력
  const handlePlayClick = () => alert(`Playing ${moviename}`);
  return (
    <>
      <Button3 onClick={handlePlayClick}>Play "{moviename}"</Button3>
    </>
  );
}
function UploadButton() {
  const handleUploadClick = () => alert(`Uploading!`);
  return (
    <>
      <Button3 onClick={handleUploadClick}>Upload Image</Button3>
    </>
  );
}

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};
// 함수 , children 받아야 함
function Button3({ onClick, children }: ButtonProps) {
  return (
    <>
      <button className="bg-orange-500 p-4" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <>
      <PlayButton moviename={'악마는 프라다를 입는다'} />
      <UploadButton />
    </>
  );
}

export default Toolbar;
