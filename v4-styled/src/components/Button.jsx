import styled from "styled-components";
const S = {
  btn: styled.button`
    background:#2563eb;
    color:#fff;
    border:0;
    border-radius:6px;
    padding:8px 14px;
    cursor:pointer;
    font:inherit;
  `,
};
export default function Button({ children, onClick }) {
  return <S.btn onClick={onClick}>{children}</S.btn>;
}
