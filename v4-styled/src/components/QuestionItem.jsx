import Badge from "./Badge.jsx";
import styled from "styled-components";
const S = {
  item: styled.li`
    display:flex;
    gap:12px;
    align-items:center;
    padding:10px 12px;
    border-bottom:1px solid #e5e7eb;
    background:#fff;
  `,
  text: styled.span`
    flex:1;
  `,
  topic: styled.span`
    width:130px;
    font-weight:600;
  `,
};
export default function QuestionItem({ q }) {
  return (
    <S.item>
      <S.topic>{q.topic}</S.topic>
      <S.text>{q.question}</S.text>
      <Badge level={q.difficulty} />
    </S.item>
  );
}
