import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

import { qrcodeGenerator } from "../../../../utils/qrcodeGenerator";

import "./QRCode.css";

import { useState } from "react";

const MyQRCode = ({ handleClose, actionBar, id, name }) => {
  const [qr, setQR] = useState("");
  const action = (
    <div className="actions-btns">
      <Button className="action-btn" onClick={handleClose} primary rounded>
        Close
      </Button>
      <Button
        className="action-btn action-down-btn"
        onClick={handleClose}
        success
        rounded
        download
        href={qr}
        file_name={`${name}.png`}
      >
        Download
      </Button>
      {/* <a href={qr} onClick={handleClose} download={`FFHD0${id}.png`}>
        Download
      </a> */}
    </div>
  );

  // CALL THE qrcodeGenerator
  (async function () {
    setQR(await qrcodeGenerator(`http://localhost:3000/loc/${id}`)); // 121
  })();

  return (
    <div className="qrcode-content">
      <Modal onClose={handleClose} actionBar={action}>
        <h1 className="hd-title">{name}</h1>
        <img className="qrcode-img" src={qr} alt={id} />
      </Modal>
    </div>
  );
};

export default MyQRCode;