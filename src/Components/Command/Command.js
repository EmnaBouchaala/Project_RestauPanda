import React from "react";
import { useDispatch } from "react-redux";
import { deleteCommand } from "../../redux/Actions/CommandAction";
import EditCommand from "./EditCommand";

const Command = ({ command }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCommand(command.id));
  return (
    <div className="command-card">
      <table className="table1">
        <tr>
          <td width="20%">
            <p> {command.Product_name} </p>
          </td>
          <td width="30%">
            <p> {command.note} </p>
          </td>
          <td width="30%">
            <p> {command.number_table} </p>
          </td>
          <td width="10%">
            <p> {command.qte}</p>
          </td>
          <th width="5%">
            <EditCommand oldCommand={command} />
          </th>
          <th width="5%">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Command;
