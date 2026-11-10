import Badge from "./Badge.jsx";
export default function QuestionItem({ q }) {
  return (
    <li className="flex gap-3 items-center px-3 py-2.5 border-b border-gray-200 bg-white">
      <span className="w-[130px] font-semibold">{q.topic}</span>
      <span className="flex-1">{q.question}</span>
      <Badge level={q.difficulty} />
    </li>
  );
}
