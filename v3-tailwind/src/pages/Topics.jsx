import { useState } from "react";
import Card from "../components/Card.jsx";
import SearchBox from "../components/SearchBox.jsx";
const topics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Searching", "Recursion", "Dynamic Programming", "Hashing"];
export default function Topics() {
  const [text, setText] = useState("");
  const shown = topics.filter((t) => t.toLowerCase().includes(text.toLowerCase()));
  return (
    <>
      <h1 className="text-[2em] my-[0.67em] font-bold">DSA Topics</h1>
      <SearchBox value={text} onChange={setText} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {shown.map((t) => <Card key={t} title={t}><p className="my-4">Key ideas and practice problems.</p></Card>)}
      </div>
    </>
  );
}
