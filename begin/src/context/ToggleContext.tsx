import { createContext, useState, type ReactNode } from 'react';

type ToggleContextValue = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleContext = createContext<ToggleContextValue | null>(null);

function ToggleProvider({ children }: { children: ReactNode }) {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);
  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export default ToggleProvider;
