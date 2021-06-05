import { createStore } from "redux";
import CommandReducer from "../Reducer/CommandReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(CommandReducer, devtools);

export default store;
