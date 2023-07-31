import React, { Children, createContext, useReducer } from 'react'

export const ContextGeneral = createContext();

const initialState = {
    numPages: {numPages: 0},
  };

  const globalReducer = (state, action) => {
    switch (action.type) {
      case "SET_NUM_PAGES":
        return { ...state, numPages: action.payload };
    }
  };


const ContextGeneralProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <ContextGeneral.Provider value={{ state, dispatch }}>
    { children }
  </ContextGeneral.Provider>
  )
}

export default ContextGeneralProvider