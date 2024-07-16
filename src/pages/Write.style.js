import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  /* width: 1000px; */
  width: 100%;
  padding: 0 160px;
  box-sizing: border-box;
  /* background-color: #eee; */
`;

export const Header = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.input`
  width: 600px;
  height: 40px;
  border: none;
  border-radius: 16px;
  color: #222;
  background-color: transparent;
  border: 1px solid #222;
  font-family: "GmarketSansMedium";
  font-size: 16px;
  padding: 0;
  padding-left: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
