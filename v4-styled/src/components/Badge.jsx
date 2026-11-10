import styled from "styled-components";
const colors = {
  Easy: ["#dcfce7", "#166534"],
  Medium: ["#fef9c3", "#854d0e"],
  Hard: ["#fee2e2", "#991b1b"],
};
const Pill = styled.span`
  padding:2px 8px;border-radius:10px;font-size:12px;
  background: ${(p) => colors[p.$level][0]};
  color: ${(p) => colors[p.$level][1]};
`;
export default function Badge({ level }) {
  return <Pill $level={level}>{level}</Pill>;
}
