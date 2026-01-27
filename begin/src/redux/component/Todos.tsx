const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <span></span>
      <button className="bg-red-500 p-4"> 삭제 </button>
    </div>
  );
};

function Todos() {
  return (
    <>
      <form action="" method="post">
        <input type="text" className="border p-3" />
        <button className="bg-orange-500 p-4"> 등록 </button>
      </form>
    </>
  );
}

export default Todos;
