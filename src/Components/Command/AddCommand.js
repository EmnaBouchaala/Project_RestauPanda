import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addCommand } from "../../redux/Actions/CommandAction";

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

const AddCommand = (product) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: Math.random,
    note: "",
    qte: "",
    number_table: "",
    Product_name: product.name,
  });
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
      <button className="btn add-command-btn" onClick={openModal}>
        Add Command
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
            let newCommand = {
              ...form,
              id: Math.random(),
            };
            dispatch(addCommand(newCommand));
            closeModal();
          }}
        >
          <label>Name</label>
          <p>{form.Product_name}</p>

          <label>Note to Chef</label>
          <input
            type="text"
            value={form.note}
            name="note"
            onChange={handleChange}
            // required
          />
          <label> Table Number </label>
          <input
            type="text"
            value={form.number_table}
            name="number"
            onChange={handleChange}
            // required
          />
          <label> Qte </label>
          <input
            type="text"
            value={form.qte}
            name="number"
            onChange={handleChange}
            // required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add
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

export default AddCommand;
