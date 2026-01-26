function Login() {
  return (
    <>
      <h1 className="text-3xl">Login</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="text"
            name="id"
            className="flex-1 rounded border px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            className="flex-1 rounded border px-3 py-2"
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
