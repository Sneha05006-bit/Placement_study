import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
export default function Home() {
  const go = useNavigate();
  return (
    <>
      <h1 className="text-[2em] my-[0.67em] font-bold">Placement Preparation Kit</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        <Card title="Aptitude"><p className="my-4">Practice quantitative and logical questions.</p><Button onClick={() => go("/aptitude")}>Start</Button></Card>
        <Card title="DSA Topics"><p className="my-4">Browse data structure and algorithm topics.</p><Button onClick={() => go("/topics")}>Browse</Button></Card>
        <Card title="Dashboard"><p className="my-4">See your weekly progress.</p><Button onClick={() => go("/dashboard")}>View</Button></Card>
      </div>
    </>
  );
}
