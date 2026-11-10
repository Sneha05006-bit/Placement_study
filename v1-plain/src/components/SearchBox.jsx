export default function SearchBox({ value, onChange }) {
  return <input className="search" placeholder="Search topics..." value={value} onChange={(e) => onChange(e.target.value)} />;
}
