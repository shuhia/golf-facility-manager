import React from "react";

type BasicPopupProps = {
  title: string;
};

const BasicPopup: React.FC<BasicPopupProps> = (props) => {
  const title: string = props.title;

  return (
    <div className="popup">
      <div className="popup-header"></div>
      <div className="popup-main"></div>
      <div className="popup-buttons">
        <button className="button-accept">accept</button>
        <button className="Button-cancel">cancel</button>
      </div>
    </div>
  );
};

export { BasicPopup };
