import styled from "styled-components";

export const CreateSpace = styled.div`
  .custom-quill-container {
    .ql-editor {
      width: 100%;
      height: 100%;
    }
    .ql-editor::before {
      font-style: normal;
    }
  }
  margin-top: 5.5rem;
`;

//프로필 래핑
export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin-left: 20px;
  :nth-child(2) {
    margin-left: 20px;
  }
  margin-bottom: 5%;
`;

export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: #d8d8d8;
  border-radius: 200px;
  text-align: center;
`;

export const CreateTitleWrap = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
`;

export const CreateTitle = styled.input`
  width: 100%;
  display: block;
  padding: 20px 15px;
  margin-top: 7%;
`;
export const Alert = styled.p`
  margin-left: 20px;
  font-size: 10px;
  color: red;
  padding-bottom: 10px;
`;

//본문 입력 공간 래핑
export const CreateContentWrap = styled.div``;

export const TextCount = styled.p<{ length: number }>`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 30px;
  div {
    color: ${(props) => (props["length"] > 200 ? "red" : "black")};
  }
`;
