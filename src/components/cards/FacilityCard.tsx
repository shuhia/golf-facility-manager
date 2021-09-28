import react from "react";
import { Facility } from "../../utils/facility";
import { EditPopup } from "../popups/EditPopup";
import "./FacilityCard.css";

type BasicCardProps = {
  facility: Facility;
};

type FacilityCardProps = {
  facility: Facility;
  onClick: (id: number) => {};
};

export const FacilityCard: React.FC<FacilityCardProps> = (props) => {
  const { id, createdAt, name, type, address } = props.facility;
  const onClick = props.onClick;
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{name}</div>
      <div className="card-type">{type}</div>
      <div className="card-address">{address}</div>
    </div>
  );
};

export const BasicCard: React.FC<BasicCardProps> = (props) => {
  const { id, createdAt, name, type, address } = props.facility;

  // Todo implement popup
  const handleClick = () => {
    // Show popup
    showPopup(id);
  };
  const showPopup = (id: string) => {
    // Edit
    // Del
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-title">{name}</div>
      <div className="card-type">{type}</div>
      <div className="card-address">{address}</div>
    </div>
  );
};
