import {
  ADD_Command,
  DELETE_Command,
  EDIT_Command,
} from "../ActionDeclaration/CommandActionTypes";

export const addCommand = (newCommand) => {
  return {
    type: ADD_Command,
    payload: newCommand,
  };
};

export const deleteCommand = (name) => {
  return {
    type: DELETE_Command,
    payload: name,
  };
};

export const editCommand = (editedCommand) => {
  return {
    type: EDIT_Command,
    payload: editedCommand,
  };
};
