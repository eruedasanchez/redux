// Capitulo 10. Creamos el rootReducer para combinar los reducers

import { combineReducers } from "redux";
import game_shop from './gameShopReducer.js';

export const rootReducers = combineReducers({
    game_shop
});

export default rootReducers;