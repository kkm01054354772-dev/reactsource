import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../reducers/loginSlice';

const initState = {
  email: '',
  pw: '',
};

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginParam, setLoginParam] = useState(initState);
  const { email, pw } = loginParam;

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(loginParam);
    dispatch(login(loginParam));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginParam({
      ...loginParam,
      [name]: value,
    });
  };

  return (
    <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        placeholder="email"
        required
        className="rounded-xs border-2 border-stone-300 p-2"
        onChange={handleChange}
      />
      <input
        name="pw"
        value={pw}
        placeholder="password"
        type="password"
        required
        className="rounded-xs border-2 border-stone-300 p-2"
        onChange={handleChange}
      />

      <div className="p-2 text-center">
        <button
          type="submit"
          className="mx-1 my-6 rounded-[3px] bg-sky-500 px-4.5 py-3 text-[1.2em] text-white hover:bg-sky-800"
        >
          Login
        </button>
        <button
          type="button"
          className="mx-1 my-6 rounded-[3px] bg-red-700 px-4.5 py-3 text-[1.2em] text-white hover:bg-red-900"
          onClick={() => navigate('../register')}
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
