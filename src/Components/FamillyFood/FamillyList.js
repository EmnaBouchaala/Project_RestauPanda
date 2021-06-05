import React, { useState } from "react";
import { FamillyData } from "../../FamillyData";
import FamillyCard from "./FamillyCard";

const FamilyList = () => {
  const [Families, setFamilies] = useState(FamillyData);
  console.log(Families);
  return (
    <div className="tm-paging-links">
      {Families.map((family) => (
        <FamillyCard className="tm-paging-link active" family={family} />
      ))}
    </div>
  );
};

export default FamilyList;
