import React from "react";
import { deleteFacility } from "../../utils/facility";

type DeletePopupProps = {
  id: string;
  handleClose: () => {};
};

const DeletePopup: React.FC<DeletePopupProps> = (props) => {
  const id = props.id;
  const title: string = "Delete Facility";
  const message: string = "message";
  const handleClose = props.handleClose;
  const handleCancel = props.handleClose;
  const handleDelete = () => {
    deleteFacility(id);
  };

  return (
    <div className="popup">
      <div className="popup-header">
        <div className="popup-title">{title}</div>
        <div className="button-close" onClick={handleClose}>
          X
        </div>
      </div>
      <div className="popup-main">
        <div className="popup-message">{message}</div>
      </div>
      <div className="popup-buttons">
        <button className="button-delete" onClick={handleDelete}>
          delete
        </button>
        <button className="Button-cancel" onClick={handleCancel}>
          cancel
        </button>
      </div>
    </div>
  );
};

export { DeletePopup };
