import React from "react";
import { ModalBackground } from "../layout/Layout.style";
import {
  ModalContainer,
  ModalContents,
  BtnBox,
  PositiveBtn,
  NegativeBtn,
} from "./Modal.style";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { confirmAtom } from "../../atoms";
import { useDeletePetInfo } from "../../hooks/UserInfoHook";

const ConfirmModal: React.FC = () => {
  const confirmContent = useRecoilValue(confirmAtom);

  const { mutate: deletePet } = useDeletePetInfo(confirmContent.currentPetId);

  // 알림 모달 초기화
  const resetConfirm = useResetRecoilState(confirmAtom);
  const handleResetConfirm = () => resetConfirm();

  const handlePositiveFunc = () => {
    switch (confirmContent.sort) {
      case "deletePet":
        return deletePet();
    }
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalContents>
          <span>{confirmContent.content}</span>
        </ModalContents>
        <BtnBox onClick={handleResetConfirm}>
          <PositiveBtn onMouseUp={handlePositiveFunc}>예</PositiveBtn>
          <NegativeBtn>아니오</NegativeBtn>
        </BtnBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ConfirmModal;
