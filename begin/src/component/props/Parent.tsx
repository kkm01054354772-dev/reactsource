import Child from './Child';

const style = {
  height: 300,
  backgroundColor: 'lightgray',
};

function Parent() {
  const name: string = '홍길동';

  return (
    <>
      <h1 className="text-3xl">부모 컴퍼넌트</h1>
      <div style={style}>
        <Child name={name} color={'red'} age={15} />
        <Child name={name} color={'blue'} />
      </div>
    </>
  );
}

export default Parent;
