import { combineReducers } from "redux";
import helloworld from "./helloworld";

const appReducer = combineReducers({
  helloworld
});
// const initialState = rootReducer(undefined, { type: ActionTypes.INIT });
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
