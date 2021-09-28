import React, { useState } from "react";
import { Facility } from "../../utils/facility";

type EditPopup = {
  title: string;
  facility: Facility;
  handleClose: () => {};
};

const EditPopup: React.FC<EditPopup> = (props) => {
  const title: string = props.title;
  // inputs
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = props.handleClose;

  // Todo: Finish form
  return (
    <div className="popup">
      <div className="popup-header">
        <div className="button-close" onClick={handleClose}>
          X
        </div>
      </div>
      <div className="popup-form">
        <div className="button-delete"></div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <div>
          <input type="radio"></input>
          <input type="radio"></input>
        </div>
        <input type="text"></input>
      </div>
      <div className="popup-buttons">
        <button className="button-accept">accept</button>
        <button className="Button-cancel">cancel</button>
      </div>
    </div>
  );
};

export { EditPopup };
