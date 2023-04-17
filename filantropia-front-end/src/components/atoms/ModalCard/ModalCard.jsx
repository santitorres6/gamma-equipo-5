import React from "react";
import { Modal } from "antd";
import { Button } from "../../atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./ModalCard.scss";

export const ModalCard = (props) => {
  const { children, isOpen, onClose } = props;
  const footer = { footer: <Button /> };
  const bodyStile = {};

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      centered
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      closeIcon={<CloseIcon />}
      footer={<Button title="Cerrar" handleClick={onClose} />}
      width={"40%"}
      wrapClassName="modal"
    >
      {children}
    </Modal>
  );
};

const CloseIcon = () => {
  return <FontAwesomeIcon icon={faCircleXmark} className="modal__icon" />;
};
