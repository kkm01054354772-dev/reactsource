import { useState } from 'react';
import { UseAuth } from './UseAuth';
import { type LoginState } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  // 로그인 클릭 시 Context value 변경
  const { login, isLoggedIn } = UseAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginState>({
    id: '',
    password: '',
  });

  const { id, password } = form;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(id, password);
    // 다른페이지로 이동
    navigate(`/account/profile/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  if (isLoggedIn) {
    return <p>이미 로그인되었습니다.</p>;
  }

  return (
    <>
      <h1 className="text-3xl">Login</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="text"
            name="id"
            className="flex-1 rounded border px-3 py-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            className="flex-1 rounded border px-3 py-2"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="rounded bg-orange-500">
          로그인
        </button>
      </form>
    </>
  );
}

export default Login;
