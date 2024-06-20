import { reducerFn } from "./utils/reducerFn";

reducerFn = (state, action) => {
  switch ((action, type)) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    default:
      throw Error("Unknown action " + action.type);
  }
};
