import s from "./SearchBox.module.css";
export default function SearchBox({ value, onChange }) {
  return <input className={s.search} placeholder="Search topics..." value={value} onChange={(e) => onChange(e.target.value)} />;
}
