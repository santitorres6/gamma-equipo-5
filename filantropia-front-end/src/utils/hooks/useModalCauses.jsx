import { useState } from "react";
import { ModalEquidadSocial } from "../../components/molecules/ModalsCauses/ModalEquidadSocial/ModalEquidadSocial";
import { ModalCienciaTecnologia } from "../../components/molecules/ModalsCauses/ModalCienciaTecnologia/ModalCienciaTecnologia";
import { ModalInspiracion } from "../../components/molecules/ModalsCauses/ModalInspiracion/ModalInspiracion";
import { ModalTransformacionHumanista } from "../../components/molecules/ModalsCauses/ModalTransformacionHumanista/ModalTransformacionHumanista";

export const useModalCauses = () => {
  const dataModal = {
    EQUIDAD_SOCIAL_E_INCLUSION: <ModalEquidadSocial />,
    CIENCIA_TECNOLOGIA_E_INNOVACION: <ModalCienciaTecnologia />,
    INSPIRACION_VOLUNTARIADO: <ModalInspiracion />,
    TRANSFORMACION_HUMANISTA: <ModalTransformacionHumanista />,
  };
  const [modalCause, setModalCause] = useState();
  const handleModalCause = (href) => {
    setModalCause(dataModal[href]);
  };

  return {
    modalCause,
    handleModalCause,
  };
};
