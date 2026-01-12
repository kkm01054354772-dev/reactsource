import './App.css';
import Hello from './component/Hello';
import MyComponent from './component/MyComponent';

function App() {
  const name = '리액트';
  // <></> : React Fragment => 화면에서는 표현되지 않음
  //         여러 개의 요소를 하나로 묶기 위해 사용
  return (
    <>
      <Hello />
      {/* 주석 */}
      <MyComponent />
      <div>{name}</div>
      {/* if ~ else : 삼항연산자 */}
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
      {/* && : 특정 조건을 만족할 때만 내용을 보여주고 그렇지 않을 때 아무것도 안함 */}
      {name === '리액트' && <h1>리액트입니다.</h1>}
    </>
  );
}

export default App;
