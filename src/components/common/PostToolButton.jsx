import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import * as B from "./Button.style";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";


const PostToolButton = ({ postId }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    // console.log(postId);
    // redux 저장하고 write page로 가면 될듯
    // navigate('/write?q='+postId);
  };

  const handleDelete = () => {
    // delete
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <B.PostToolBtn onClick={(e) => e.stopPropagation()}>
      <B.SmallButton onClick={() => handleMenu()}>
        <IoIosMore size={16} />
      </B.SmallButton>

      {showMenu && (
        <B.Dropdown>
          <ul>
            <li onClick={handleEdit}>
              <CiEdit size={18} />
              수정
            </li>
            <li onClick={handleDelete}>
              <CiTrash size={18} />
              삭제
            </li>
          </ul>
        </B.Dropdown>
      )}
    </B.PostToolBtn>
  );
};

export default PostToolButton;
