import s from "./Card.module.css";
export default function Card({ title, children }) {
  return (
    <div className={s.card}>
      <h3 className={s.ctitle}>{title}</h3>
      {children}
    </div>
  );
}
