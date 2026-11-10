import s from "./Button.module.css";
export default function Button({ children, onClick }) {
  return <button className={s.btn} onClick={onClick}>{children}</button>;
}
