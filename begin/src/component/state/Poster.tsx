import { useState } from 'react';
import wish1 from '../../assets/img/wish1.jpg';
import wish2 from '../../assets/img/wish2.jpg';

const Poster = () => {
  // useState() : 첫번째 인자 = default / 두번째 인자 = 함수
  const [src, setSrc] = useState<string>(wish1);

  // 버튼의 상태 변화를 저장하는 함수
  const [btn, setBtn] = useState<boolean>(true);

  const onToggleHandled = () => {
    // setSrc(wish1) <=> setSrc(wish2)
    if (btn) {
      setSrc(wish1);
      setBtn(false);
    } else {
      setSrc(wish2);
      setBtn(true);
    }
  };

  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <img src={src} alt="" width={300} height={500} />
          <button
            className="m-2 w-32 rounded bg-blue-500 p-4 text-xl text-white"
            onClick={onToggleHandled}
          >
            이미지 변경
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster;
