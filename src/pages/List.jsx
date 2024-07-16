import React from "react";
import * as L from "./List.style";
import PostItem from "../components/PostItem";
import CreateButton from "../components/CreateButton";
import { useNavigate, useParams } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const { date } = useParams();

  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  const data = {
    title: "Title",
    contents:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, fugit alias? Possimus, optio perferendis quia illo ex pariatur, veniam?",
    date: new Date("2024-7-14"),
    id: 0,
  };

  return (
    <L.Wrapper>
      <L.Container>
        {/* <L.PageTitle>Posts</L.PageTitle> */}
        <L.Header>
          <L.Date>
            {year}년 {month.startsWith(0) ? month[1] : month}월 {day}일
          </L.Date>

          <CreateButton />
        </L.Header>

        <L.ListContainer>
          {/* Get으로 해당 날짜의 포스트 가져오기 for로 postId 부여 */}
          <PostItem postId={1} data={data} />
          <PostItem postId={2} data={data} />
          <PostItem postId={3} data={data} />
        </L.ListContainer>
      </L.Container>
    </L.Wrapper>
  );
};

export default List;
