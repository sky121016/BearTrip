import styled from "styled-components";

export const Button = styled.div`
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : "#222")};

  /* width: 140px; */
  height: 40px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  
  padding-left: ${(props) => (props.$noIcon ? "20px" : "10px")};
  padding-right: 20px;

  color: ${(props) => (props.$color ? props.$color : "#fff")};

  gap: 6px;

  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$hoverColor ? props.$hoverColor : "#444")};
  }
`;
