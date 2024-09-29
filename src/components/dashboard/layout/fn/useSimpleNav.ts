// useSimpleNav.ts
import { useContext, useState, useEffect } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";

export const useSimpleNav = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [selectedContext, setSelectedContext] = useState<string | null>("");
  const [selectedSubContext, setSelectedSubContext] = useState<string | null>(
    ""
  );

  const handleChangeContext = (newContext: string, newSubContext: string) => {
    dispatch({ type: ActionTypes.SET_CONTEXT, payload: newContext });
    dispatch({ type: ActionTypes.SET_SUB_CONTEXT, payload: newSubContext });
    setSelectedContext(newContext);
    setSelectedSubContext(newSubContext);
  };

  useEffect(() => {
    console.log("Contexto seleccionado actualizado:", state.context);
    setSelectedContext(state.context);
  }, [state.context]);

  useEffect(() => {
    console.log("Sub-contexto seleccionado actualizado:", state.sub_context);
    setSelectedSubContext(state.sub_context);
  }, [state.sub_context]);

  return { selectedContext, selectedSubContext, handleChangeContext };
};
