import React from "react";
import * as L from "./List.style";
import PostItem from "../components/PostItem";
import CreateButton from "../components/CreateButton";

const List = () => {
  const today = new Date();
  return (
    <L.Wrapper>
      <L.Container>
        {/* <L.PageTitle>Posts</L.PageTitle> */}
        <L.Header>
          <L.Date>
            {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
          </L.Date>

          <CreateButton />
        </L.Header>

        <L.ListContainer>
          <PostItem />
          <PostItem />
          <PostItem />
        </L.ListContainer>
      </L.Container>
    </L.Wrapper>
  );
};

export default List;
