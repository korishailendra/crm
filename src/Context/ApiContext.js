import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const updateResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <ApiContext.Provider value={{ responseData, updateResponseData }}>
      {children}
    </ApiContext.Provider>
  );
};
