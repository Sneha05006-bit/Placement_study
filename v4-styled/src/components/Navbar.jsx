import { NavLink } from "react-router-dom";
import styled from "styled-components";
const S = {
  link: styled(NavLink)`
    color:#dbeafe;
    text-decoration:none;
    &.active { color:#fff;font-weight:600 }
  `,
  navbar: styled.nav`
    display:flex;
    gap:20px;
    align-items:center;
    padding:14px 24px;
    background:#1e3a8a;
    color:#fff;
  `,
};
export default function Navbar() {
  return (
    <S.navbar>
      <strong>Placement Kit</strong>
      <S.link to="/">Home</S.link>
      <S.link to="/aptitude">Aptitude</S.link>
      <S.link to="/topics">DSA Topics</S.link>
      <S.link to="/dashboard">Dashboard</S.link>
    </S.navbar>
  );
}
