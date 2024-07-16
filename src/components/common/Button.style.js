import styled from "styled-components";

export const Button = styled.div`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#222"};

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
    background-color: ${(props) =>
      props.$hoverColor ? props.$hoverColor : "#444"};
  }
`;

export const Dropdown = styled.div`
  width: 80px;
  background-color: #fff;
  border: 1.5px solid #ddd;
  box-sizing: border-box;
  position: absolute;
  top: 37px;
  right: 0;
  border-radius: 10px;

  ul {
    padding: 0;
    margin: 0;
    cursor: pointer;

    li {
      font-size: 14px;
      padding: 10px;
      border-radius: 8px;
      display: flex;
      gap: 6px;

      &:hover {
        background-color: #eee;
      }
    }
  }
`;

export const PostToolBtn = styled.div`
  position: relative;
`;

export const SmallButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1.5px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
