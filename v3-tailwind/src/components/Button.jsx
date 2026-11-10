export default function Button({ children, onClick }) {
  return <button className="bg-blue-600 text-white border-0 rounded-md px-3.5 py-2 cursor-pointer" onClick={onClick}>{children}</button>;
}
