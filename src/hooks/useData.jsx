import React from 'react';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [numero, setNumero] = React.useState(11);
  const [message, setMessage] = React.useState(null);
  const [userAuth, setUserAuth] = React.useState(null);
  return <DataContext.Provider value={{ numero, message, setMessage, userAuth, setUserAuth }}>
    {children}
  </DataContext.Provider>
}

export const useData = () => {
  const context = React.useContext(DataContext);
  return context;
}