import { useEffect, useRef } from "react";
import questions from "../data/questions.json";
import QuestionItem from "../components/QuestionItem.jsx";
import styled from "styled-components";
const S = {
  list: styled.ul`
    list-style:none;
    padding:0;
    margin:0;
  `,
  title: styled.h1`
    font-size:2em;
    margin:0.67em 0;
  `,
};
export default function Aptitude() {
  // Test C timer: starts when this component first renders
  const t0 = useRef(performance.now());
  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      console.log("render ms:", performance.now() - t0.current);
    }));
  }, []);
  const n = Number(new URLSearchParams(window.location.search).get("n")) || 100;
  const items = questions.slice(0, n);
  return (
    <>
      <S.title>Aptitude Practice ({items.length} questions)</S.title>
      <S.list>
        {items.map((q) => <QuestionItem key={q.id} q={q} />)}
      </S.list>
    </>
  );
}
