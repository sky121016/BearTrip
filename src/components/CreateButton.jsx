import React from 'react'
import { IoIosAdd } from "react-icons/io";
import * as C from "./CreateButton.style"
import {Button} from "../components/common/Button.style"
import { useNavigate } from 'react-router-dom';

const CreateButton = () => {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/write');
  }
  return (
    // <C.Container>
    //     <IoIosAdd color='#fff' size={24}/>
    //     <span>글 작성하기</span>
    // </C.Container>
        <Button onClick={handleClick}><IoIosAdd color='#fff' size={24}/>글 작성하기</Button>
  )
}

export default CreateButton