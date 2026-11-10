export default function Card({ title, children }) {
  return (
    <div className="card">
      <h3 className="ctitle">{title}</h3>
      {children}
    </div>
  );
}
