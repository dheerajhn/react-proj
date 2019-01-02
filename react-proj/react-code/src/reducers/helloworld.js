import { HELLO_WORLD, RESET } from "../constants/index";

const initialState = { message: "Hello" };

export default (state = initialState, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: "Hello, World!" });
    case RESET:
      return (state = initialState);
    default:
      return state;
  }
};
