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
  active_aside: true, // Nuevo estado
};

// Define el objeto para las acciones
const ActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_CONTEXT: "SET_CONTEXT",
  RESET_STATE: "RESET_STATE",
  SET_ACTIVE_ASIDE: "SET_ACTIVE_ASIDE",
} as const;

// Define las acciones
type Action =
  | { type: typeof ActionTypes.LOGIN }
  | { type: typeof ActionTypes.LOGOUT }
  | { type: typeof ActionTypes.SET_CONTEXT; payload: string }
  | { type: typeof ActionTypes.RESET_STATE }
  | { type: typeof ActionTypes.SET_ACTIVE_ASIDE; payload: boolean };

// Define el tipo de estado
export type State = typeof initialState;

// Función para guardar el estado en localStorage
const saveStateToLocalStorage = (state: State) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage", e);
  }
};

// Función para cargar el estado desde localStorage
const loadStateFromLocalStorage = (): State | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

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
      case ActionTypes.LOGIN:
        return { ...state, token: true };
      case ActionTypes.LOGOUT:
        return { ...state, token: false };
      case ActionTypes.SET_CONTEXT:
        return { ...state, context: action.payload };
      case ActionTypes.RESET_STATE:
        return initialState;
      case ActionTypes.SET_ACTIVE_ASIDE:
        return { ...state, active_aside: action.payload };
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

// Exporta todo al final
export { GlobalStateProvider, GlobalStateContext, ActionTypes, initialState };
