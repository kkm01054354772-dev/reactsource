const Signup = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" method="post" onSubmit={onSubmit}>
        <input type="text" name="" id="" className="border p-2" />
        <button type="submit" className="m-2 bg-orange-500 p-2">
          send
        </button>
      </form>
    </>
  );
};

export default Signup;
