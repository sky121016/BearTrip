import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 240px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  /* margin-bottom: 10px; */
`;

export const PostDate = styled.p`
  font-size: 12px;
  margin: 0;
  color: #999;
`;


export const Contents = styled.p`
  font-size: 16px;
`;

