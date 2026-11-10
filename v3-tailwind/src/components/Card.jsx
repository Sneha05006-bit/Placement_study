export default function Card({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-[1.17em] my-[1em] font-bold">{title}</h3>
      {children}
    </div>
  );
}
