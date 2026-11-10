import { useEffect, useRef } from "react";
import questions from "../data/questions.json";
import QuestionItem from "../components/QuestionItem.jsx";
import s from "./Aptitude.module.css";
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
      <h1 className={s.title}>Aptitude Practice ({items.length} questions)</h1>
      <ul className={s.list}>
        {items.map((q) => <QuestionItem key={q.id} q={q} />)}
      </ul>
    </>
  );
}
