import { CommandData } from "../../CommandData";
import {
  ADD_Command,
  DELETE_Command,
  EDIT_Command,
} from "../ActionDeclaration/CommandActionTypes";

const init = {
  Menus: CommandData,
};

const CommandReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_Command:
      return {
        ...state,
        Menus: [...state.Menus, payload],
      };
    case EDIT_Command:
      return {
        ...state,
        Menus: state.Menus.map((product) =>
          product.id === payload.id ? { ...product, ...payload } : product
        ),
      };
    case DELETE_Command:
      return {
        ...state,
        Menus: state.Menus.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};

export default CommandReducer;
