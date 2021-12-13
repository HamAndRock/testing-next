import React, { createContext, useContext, useReducer } from "react";

import { TState, initialState } from "./initialState";
import { TAction } from "./actions";
import { reducer } from "./reducer";

const AppContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useStore = () => useContext(AppContext);

export { AppContext, AppProvider, useStore };
