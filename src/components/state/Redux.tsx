import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

// Define el estado inicial
const initialState = {
  token: true,
};

// Define las acciones
type Action = { type: "LOGIN" } | { type: "LOGOUT" };

// Define el tipo de estado
type State = typeof initialState;

// Crea el reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: true };
    case "LOGOUT":
      return { ...state, token: false };
    default:
      return state;
  }
};

// Crea el contexto
const GlobalStateContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Crea el proveedor de contexto
const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
