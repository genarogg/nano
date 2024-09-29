// useSimpleNav.ts
import { useContext, useState, useEffect } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";

export const useSimpleNav = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [selectedContext, setSelectedContext] = useState<string | null>("");

  const handleChangeContext = (newContext: string) => {
    dispatch({ type: ActionTypes.SET_CONTEXT, payload: newContext });
    setSelectedContext(newContext);
  };

  useEffect(() => {
    console.log("Contexto seleccionado actualizado:", state.context);
    setSelectedContext(state.context);
  }, [state.context]);

  return { selectedContext, handleChangeContext };
};
