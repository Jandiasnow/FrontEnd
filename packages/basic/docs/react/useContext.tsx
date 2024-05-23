import React, { createContext, useContext } from 'react';

// create
export const LevelContext = createContext<string>('');

const Child = () => {
  // use
  const level = useContext(LevelContext);
  return <>{level}</>;
};

export default () => {
  // use
  return (
    <LevelContext.Provider value={'context'}>
      <Child />
    </LevelContext.Provider>
  );
};
