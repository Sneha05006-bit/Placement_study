import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import styled from "styled-components";
const S = {
  grid: styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    gap:16px;
  `,
  par: styled.p`
    margin:1em 0;
  `,
  title: styled.h1`
    font-size:2em;
    margin:0.67em 0;
  `,
};
export default function Home() {
  const go = useNavigate();
  return (
    <>
      <S.title>Placement Preparation Kit</S.title>
      <S.grid>
        <Card title="Aptitude"><S.par>Practice quantitative and logical questions.</S.par><Button onClick={() => go("/aptitude")}>Start</Button></Card>
        <Card title="DSA Topics"><S.par>Browse data structure and algorithm topics.</S.par><Button onClick={() => go("/topics")}>Browse</Button></Card>
        <Card title="Dashboard"><S.par>See your weekly progress.</S.par><Button onClick={() => go("/dashboard")}>View</Button></Card>
      </S.grid>
    </>
  );
}
