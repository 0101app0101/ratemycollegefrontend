import { combineReducers } from "redux";
import collegesReducer from "./collegesReducer";
import stateReducer from "./stateReducer";
import statelistReducer from "./statelistReducer";

const rootReducer= combineReducers({collegesReducer,stateReducer,statelistReducer})

export default rootReducer