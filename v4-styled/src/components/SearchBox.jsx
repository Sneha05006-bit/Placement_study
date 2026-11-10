import styled from "styled-components";
const S = {
  search: styled.input`
    width:100%;
    padding:10px;
    margin-bottom:16px;
    border:1px solid #d1d5db;
    border-radius:6px;
    font:inherit;
  `,
};
export default function SearchBox({ value, onChange }) {
  return <S.search placeholder="Search topics..." value={value} onChange={(e) => onChange(e.target.value)} />;
}
