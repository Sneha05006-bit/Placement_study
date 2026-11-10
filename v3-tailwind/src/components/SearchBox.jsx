export default function SearchBox({ value, onChange }) {
  return <input className="w-full p-2.5 mb-4 border border-gray-300 rounded-md" placeholder="Search topics..." value={value} onChange={(e) => onChange(e.target.value)} />;
}
