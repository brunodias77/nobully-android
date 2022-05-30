import React from 'react';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [numero, setNumero] = React.useState(11);
  return <DataContext.Provider value={{ numero }}>
    {children}
  </DataContext.Provider>
}

export const useData = () => {
  const context = React.useContext(DataContext);
  return context;
}