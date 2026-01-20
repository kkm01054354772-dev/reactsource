import { useState } from 'react';

function AddTask({ onAddTask }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState('');
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          name="text"
          id=""
          className="flex-1 rounded border px-3 py-2"
          placeholder="할 일을 입력하세요"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          type="button"
          className="py-w rounded bg-orange-500 px-4 text-white"
          onClick={() => {
            onAddTask(text);
            setText('');
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTask;
