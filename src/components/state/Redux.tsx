import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

// Define el estado inicial
const initialState = {
  token: true,
  context: "home",
};

// Define las acciones
type Action =
  | { type: "LOGIN" }
  | { type: "LOGOUT" }
  | { type: "SET_CONTEXT"; payload: string };

// Define el tipo de estado
type State = typeof initialState;

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage", e);
  }
};

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state from localStorage", e);
    return undefined;
  }
};

// Crea el reducer
const reducer = (state: State, action: Action): State => {
  const newState = (() => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, token: true };
      case "LOGOUT":
        return { ...state, token: false };
      case "SET_CONTEXT":
        return { ...state, context: action.payload };
      default:
        return state;
    }
  })();

  saveStateToLocalStorage(newState);
  return newState;
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
  const persistedState = loadStateFromLocalStorage();
  const [state, dispatch] = useReducer(reducer, persistedState || initialState);

  useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
