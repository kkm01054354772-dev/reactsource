function Array() {
  // type or interface
  interface User {
    name: string;
    email: string;
  }
  type Item = {
    id: number;
    price: number;
  };

  const user: User = {
    name: 'Jane',
    email: 'jane@example.com',
  };
  const colors: string[] = ['red', 'blue', 'green'];
  const numbers: number[] = [1, 2, 3, 4, 5];
  //   const items: { id: number; price: number }[] = [
  //     { id: 1, price: 10 },
  //     { id: 2, price: 20 },
  //   ];

  const items: Item[] = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];
  return (
    <>
      <p>
        user 정보 : {user.name}({user.email})
      </p>
      <p>색상 : {colors[1]}</p>
      {/* 전체 색상 출력 => map() */}
      <h3>전체 색상 출력</h3>
      <ul>
        {colors.map((color, idx) => (
          <li key={idx}>color:{color}</li>
        ))}
      </ul>
      <h3>Items 조회</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.price}</li>
        ))}
      </ul>
      <h3>numbers 출력</h3>
      {numbers.map((num, idx) => (
        <li key={idx}>{num}</li>
      ))}
      {/* filter : 짝수만 출력 */}
      <p>{numbers.filter((n) => n % 2 === 0).join(',')}</p>
      {/* 2씩 곱해서 출력 */}
      <p>{numbers.map((n) => n * 2).join(',')}</p>
    </>
  );
}

export default Array;
