import Badge from "./Badge.jsx";
export default function QuestionItem({ q }) {
  return (
    <li className="item">
      <span className="topic">{q.topic}</span>
      <span className="text">{q.question}</span>
      <Badge level={q.difficulty} />
    </li>
  );
}
