const colors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};
export default function Badge({ level }) {
  return <span className={`px-2 py-0.5 rounded-[10px] text-xs ${colors[level]}`}>{level}</span>;
}
