import React from "react";
import * as P from "./PostItem.style";

import { useState } from "react";
import PostToolButton from "./common/PostToolButton";
import { useNavigate } from "react-router-dom";


const PostItem = ({data, postId}) => {
  const navigate = useNavigate();


  const handlePostClick = ()=>{
    navigate(`./view/${postId}`);
  }


  return (
    <P.Container onClick={handlePostClick}>
      <P.Top>
        <div>

          <P.PostTitle>{data.title}</P.PostTitle>
          <P.PostDate>
            {data.date.getFullYear()}/{data.date.getMonth() + 1}/
            {data.date.getDate()}
          </P.PostDate>

        </div>

        <PostToolButton postId={postId}/>

        {/* <P.Menu onClick={() => handleMenu()}>
          <IoIosMore size={16} />
        </P.Menu>

        {showMenu && (
          <PostToolButton postId={postId}></PostToolButton>
        )} */}
      </P.Top>

      <P.Contents>{data.contents}</P.Contents>
    </P.Container>
  );
};

export default PostItem;
