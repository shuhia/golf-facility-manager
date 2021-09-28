import * as React from "react";
import { Facility } from "../../utils/facility";

type BasicCardProps = {
  facility: Facility;
};

type FacilityCardProps = {
  facility: Facility;
};

export const FacilityCard: React.FC<FacilityCardProps> = (props) => {
  const { id, createdAt, name, type, address } = props.facility;

  // Todo implement popup
  const handleClick = () => {
    // Show popup
  };
  const showPopup = (id: string) => {
    // Edit
    // Del
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-title">{name}</div>
      <div className="card-type">{type}</div>
      <div className="card-adress">{address}</div>
    </div>
  );
};

export const BasicCard: React.FC<BasicCardProps> = (props) => {
  const { id, createdAt, name, type, address } = props.facility;

  // Todo implement popup
  const handleClick = () => {
    // Show popup
  };
  const showPopup = (id: string) => {
    // Edit
    // Del
  };

  const deleteFacility = (id: string) => {};
  const editFacility = (id: string, newFacility: Facility) => {};

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-title">{name}</div>
      <div className="card-type">{type}</div>
      <div className="card-adress">{address}</div>
    </div>
  );
};
