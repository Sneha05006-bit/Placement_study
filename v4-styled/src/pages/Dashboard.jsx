import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
const S = {
  title: styled.h1`
    font-size:2em;
    margin:0.67em 0;
  `,
};
const data = [
  { day: "Mon", solved: 12 }, { day: "Tue", solved: 18 }, { day: "Wed", solved: 9 },
  { day: "Thu", solved: 22 }, { day: "Fri", solved: 15 }, { day: "Sat", solved: 27 }, { day: "Sun", solved: 20 },
];
export default function Dashboard() {
  return (
    <>
      <S.title>Progress Dashboard</S.title>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="day" /><YAxis /><Tooltip />
            <Bar dataKey="solved" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
