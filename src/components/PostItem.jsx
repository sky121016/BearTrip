import React from "react";
import * as P from "./PostItem.style";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";

const Post = () => {
  const data = {
    title: "Title",
    contents:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, fugit alias? Possimus, optio perferendis quia illo ex pariatur, veniam?",
    date: new Date("2024-7-14"),
    id: 0,
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <P.Container>
      <P.Top>
        <div>

          <P.PostTitle>{data.title}</P.PostTitle>
          <P.PostDate>
            {data.date.getFullYear()}/{data.date.getMonth() + 1}/
            {data.date.getDate()}
          </P.PostDate>

        </div>

        <P.Menu onClick={() => handleMenu()}>
          <IoIosMore size={16} />
        </P.Menu>

        {showMenu && (
          <P.Dropdown>
            <ul>
              <li><CiEdit size={18}/>수정</li>
              <li><CiTrash size={18}/>삭제</li>
            </ul>
          </P.Dropdown>
        )}
      </P.Top>

      <P.Contents>{data.contents}</P.Contents>
    </P.Container>
  );
};

export default Post;
