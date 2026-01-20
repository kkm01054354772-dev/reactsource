import { useReducer, useState, type ChangeEvent } from 'react';
import { userReducer } from './userReducer';

export type UserType = {
  name: string;
  year: number;
  warning: string;
};

export const initialUser: UserType = {
  name: '',
  year: 0,
  warning: '',
};

function UserApp2() {
  // const [user, setUser] = useState(initialUser);
  // userReducer (리듀서함수, 초기값);
  const [user, dispatch] = useReducer(userReducer, initialUser);

  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      dispatch({
        type: 'SET_NAME',
        name: value,
      });
    } else {
      // 나이 (성인여부를 판별 18세 미만은 경고 메시지)
      dispatch({
        type: 'SET_YEAR',
        year: Number(value),
      });
    }
  };

  const onReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (
    <>
      <div className="flex flex-col items-center px-3 py-2">
        <div className="flex w-full items-center gap-3">
          <div>
            <input
              type="text"
              name="name"
              className="flex-1 rounded border px-3 py-2"
              placeholder="Enter name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <input
              type="number"
              name="year"
              className="flex-1 rounded border px-3 py-2"
              placeholder="Enter birth year"
              onChange={handleChange}
              value={year}
            />
          </div>
          <button
            type="button"
            className="py-w rounded bg-orange-500 px-4 text-white"
            onClick={onReset}
          >
            reset
          </button>
          <div>
            <ul>
              <li>Name : {name}</li>
              <li>
                Year : {year}{' '}
                {warning && <span className="text-red-500">{warning}</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserApp2;
