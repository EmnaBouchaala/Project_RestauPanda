import React from "react";
import { Link } from "react-router-dom";

const FamillyCard = ({ family }) => {
  console.log(family);
  return (
    <div className="tm-paging-item">
      <Link to={`/product/${family.name}`} className="tm-paging-link">
        {" "}
        {family.name}
      </Link>
    </div>
  );
};

export default FamillyCard;
