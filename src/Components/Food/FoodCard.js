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
const FoodCard = ({ product }) => {
  console.log("the products are", product);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: Math.random,
    Product_name: product.name,
    note: "",
    number_table: "",
    qte: "",
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
    <div className="Food-card">
      <img
        src={product.image}
        alt={product.image}
        class="img-fluid tm-gallery-img"
      />
      <h3 class="tm-gallery-title"> {product.name} </h3>

      <h3 class="tm-gallery-price"> {product.price} </h3>
      <p class="tm-gallery-description"> {product.Description} </p>
      <button className="btnN add-command-btn" onClick={openModal}>
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

            // required
          />
          <br></br>
          <label> Table Number </label>
          <input
            type="text"
            value={form.number_table}
            name="number_table"
            onChange={handleChange}

            // required
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

export default FoodCard;
