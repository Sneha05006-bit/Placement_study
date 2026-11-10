import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import s from "./Dashboard.module.css";
const data = [
  { day: "Mon", solved: 12 }, { day: "Tue", solved: 18 }, { day: "Wed", solved: 9 },
  { day: "Thu", solved: 22 }, { day: "Fri", solved: 15 }, { day: "Sat", solved: 27 }, { day: "Sun", solved: 20 },
];
export default function Dashboard() {
  return (
    <>
      <h1 className={s.title}>Progress Dashboard</h1>
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
