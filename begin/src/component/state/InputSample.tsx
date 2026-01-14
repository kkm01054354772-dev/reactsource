import { useState } from 'react';
import '../../App.css';

function InputSample() {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        value={text}
        className="border-2 p-1.5"
      />
      <button className="bg-red-500 p-2" onClick={() => setText('')}>
        초기화
      </button>
      <div>
        <b>현재값 : {text}</b>
      </div>
    </>
  );
}

export default InputSample;
