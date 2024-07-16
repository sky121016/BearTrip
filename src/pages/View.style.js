import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 160px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 200px;
  /* display: flex; */
  align-items: center;
  /* justify-content: space-between; */
  /* background-color: #eee; */
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
  box-sizing: border-box;
`;



export const Title = styled.h1`
  width: 100%;
  font-size: 32px;
  text-align: center;
`;

export const Date = styled.p`
  width: 100%;
  font-size: 14px;
  text-align: center;
  color:#aaa;
  margin:0;
`;



export const ContentsContainer = styled.div`
  width: 100%;
  /* background-color: #ddd; */
  padding:20px;
  padding-top:40px;
  box-sizing: border-box;
`

export const Contents = styled.p`
  font-size: 16px;
  line-height: 1.6;
`