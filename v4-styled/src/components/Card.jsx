import styled from "styled-components";
const S = {
  card: styled.div`
    background:#fff;
    border:1px solid #e5e7eb;
    border-radius:8px;
    padding:16px;
  `,
  ctitle: styled.h3`
    font-size:1.17em;
    margin:1em 0;
  `,
};
export default function Card({ title, children }) {
  return (
    <S.card>
      <S.ctitle>{title}</S.ctitle>
      {children}
    </S.card>
  );
}
