import s from "./Badge.module.css";
export default function Badge({ level }) {
  return <span className={`${s.badge} ${s[level.toLowerCase()]}`}>{level}</span>;
}
