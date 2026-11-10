import { useState } from "react";
import Card from "../components/Card.jsx";
import SearchBox from "../components/SearchBox.jsx";
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
const topics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Searching", "Recursion", "Dynamic Programming", "Hashing"];
export default function Topics() {
  const [text, setText] = useState("");
  const shown = topics.filter((t) => t.toLowerCase().includes(text.toLowerCase()));
  return (
    <>
      <S.title>DSA Topics</S.title>
      <SearchBox value={text} onChange={setText} />
      <S.grid>
        {shown.map((t) => <Card key={t} title={t}><S.par>Key ideas and practice problems.</S.par></Card>)}
      </S.grid>
    </>
  );
}
