import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// Con <AppDispatch,RootState> indico los posibles tipos de datos que toma
// la funcion useDispatch. Con esto, useDispatch puede acceder al counterReducer

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



