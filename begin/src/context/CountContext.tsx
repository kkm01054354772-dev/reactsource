// Context: 공통으로 사용할 상태를 저장

import { createContext, useState, type ReactNode } from 'react';

type CountcontextValue = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// context 생성
const CountContext = createContext<CountcontextValue | null>(null);

// 데이터를 공급하는 역할
function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };
