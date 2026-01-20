import { useState, type ChangeEvent } from 'react';

type UserType = {
  name: string;
  year: number;
  warning: string;
};

const initialUser: UserType = {
  name: '',
  year: 0,
  warning: '',
};

function UserApp() {
  const [user, setUser] = useState(initialUser);

  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      // 이름(소문자로 변경후 보여주기)
      setUser({
        ...user,
        name: value.trim().toLowerCase(),
      });
    } else {
      // 나이 (성인여부를 판별 18세 미만은 경고 메시지)
      const age = new Date().getFullYear() - Number(value);
      setUser({
        ...user,
        year: Number(value),
        warning: Number(value) !== 0 && age < 18 ? ' 18세미만 입니다.' : '',
      });
    }
  };

  const onReset = () => {
    setUser(initialUser);
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

export default UserApp;
