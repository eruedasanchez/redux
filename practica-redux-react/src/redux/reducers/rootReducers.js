// Capitulo 10. Creamos el rootReducer para combinar los reducers

import { combineReducers } from "redux";
import game_shop from './gameShopReducer.js';
import buscador from "./buscadorReducer.js";

export const rootReducers = combineReducers({
    game_shop,
    buscador
});

export default rootReducers;

// CAPITULO 18. Agrego a buscador en el rootReducers