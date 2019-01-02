import { HELLO_WORLD, RESET } from "../constants/index";

export const helloWorld = () => {
  return {
    type: HELLO_WORLD
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};
