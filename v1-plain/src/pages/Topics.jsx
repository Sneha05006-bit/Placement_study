import { useState } from "react";
import Card from "../components/Card.jsx";
import SearchBox from "../components/SearchBox.jsx";
const topics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Searching", "Recursion", "Dynamic Programming", "Hashing"];
export default function Topics() {
  const [text, setText] = useState("");
  const shown = topics.filter((t) => t.toLowerCase().includes(text.toLowerCase()));
  return (
    <>
      <h1 className="title">DSA Topics</h1>
      <SearchBox value={text} onChange={setText} />
      <div className="grid">
        {shown.map((t) => <Card key={t} title={t}><p className="par">Key ideas and practice problems.</p></Card>)}
      </div>
    </>
  );
}
