import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eee;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Date = styled.h3`
  /* margin: 20px; */
  /* margin-bottom: 40px; */
  font-size: 24px;
  text-align: left;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const PageTitle = styled.h2`
  font-size: 20px;
  margin: 0 10px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #aaa;
`;
