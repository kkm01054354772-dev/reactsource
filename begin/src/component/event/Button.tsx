function Button() {
  // 버튼 클릭 시 alert('버튼 클릭')
  const handleClick = () => alert('버튼 클릭');

  return (
    <>
      <button className="bg-orange-500 p-4" onClick={handleClick}>
        버튼
      </button>
    </>
  );
}

export default Button;
