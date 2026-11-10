import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import s from "./Home.module.css";
export default function Home() {
  const go = useNavigate();
  return (
    <>
      <h1 className={s.title}>Placement Preparation Kit</h1>
      <div className={s.grid}>
        <Card title="Aptitude"><p className={s.par}>Practice quantitative and logical questions.</p><Button onClick={() => go("/aptitude")}>Start</Button></Card>
        <Card title="DSA Topics"><p className={s.par}>Browse data structure and algorithm topics.</p><Button onClick={() => go("/topics")}>Browse</Button></Card>
        <Card title="Dashboard"><p className={s.par}>See your weekly progress.</p><Button onClick={() => go("/dashboard")}>View</Button></Card>
      </div>
    </>
  );
}
