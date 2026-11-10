import Badge from "./Badge.jsx";
import s from "./QuestionItem.module.css";
export default function QuestionItem({ q }) {
  return (
    <li className={s.item}>
      <span className={s.topic}>{q.topic}</span>
      <span className={s.text}>{q.question}</span>
      <Badge level={q.difficulty} />
    </li>
  );
}
