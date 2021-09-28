import React, { useState } from "react";
import { Facility } from "../../utils/facility";
import { FacilityCard } from "./FacilityCard";
import "./FacilityCards.css";
import { EditPopup } from "../popups/EditPopup";

type CardsProps = {
  facilities: Facility[];
};

const FacilityCards: React.FC<CardsProps> = (props) => {
  const [selectedFacility, setSelectedFacility] = useState();
  const facilities = props.facilities;
  return (
    <div className="cards">
      {facilities.map((facility) => (
        <FacilityCard
          facility={facility}
          onClick={(id: number) => setSelectedFacility(id)}
        ></FacilityCard>
      ))}
      {popup}
    </div>
  );
};

export default FacilityCards;
