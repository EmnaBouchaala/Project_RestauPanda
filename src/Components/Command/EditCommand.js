import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editCommand } from "../../redux/Actions/CommandAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditCommand = ({ oldCommand }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: oldCommand.id,
    Product_name: oldCommand.Product_name,
    note: oldCommand.note,
    number_table: oldCommand.number_table,
    qte: oldCommand.qte,
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Edit
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(editCommand(form));
            closeModal();
          }}
          className="form"
        >
          <label>Name</label>
          <h1>{form.Product_name}</h1>

          <label>Note to Chef</label>
          <input
            type="text"
            value={form.note}
            name="note"
            onChange={handleChange}
          />
          <br></br>
          <label> Table Number </label>
          <input
            type="text"
            value={form.number_table}
            name="number_table"
            onChange={handleChange}
          />
          <br></br>
          <label> Quantity </label>
          <input
            type="number"
            min="1"
            max="30"
            value={form.qte}
            name="qte"
            onChange={handleChange}

            // required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditCommand;
