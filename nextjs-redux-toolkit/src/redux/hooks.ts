import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";


// Con useDispatch<AppDispatch>, declaramos que App puede utilizar el counterReducer para caracteristicas
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Declaramos useAppSelector para obtener un selector del estado o un dato, utilizamos useAppSelector.   
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;