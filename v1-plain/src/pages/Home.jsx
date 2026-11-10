import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
export default function Home() {
  const go = useNavigate();
  return (
    <>
      <h1 className="title">Placement Preparation Kit</h1>
      <div className="grid">
        <Card title="Aptitude"><p className="par">Practice quantitative and logical questions.</p><Button onClick={() => go("/aptitude")}>Start</Button></Card>
        <Card title="DSA Topics"><p className="par">Browse data structure and algorithm topics.</p><Button onClick={() => go("/topics")}>Browse</Button></Card>
        <Card title="Dashboard"><p className="par">See your weekly progress.</p><Button onClick={() => go("/dashboard")}>View</Button></Card>
      </div>
    </>
  );
}
