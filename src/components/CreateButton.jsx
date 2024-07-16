import React from 'react'
import { IoIosAdd } from "react-icons/io";
import * as C from "./CreateButton.style"
import {Button} from "./Button.style"

const CreateButton = () => {
  return (
    // <C.Container>
    //     <IoIosAdd color='#fff' size={24}/>
    //     <span>글 작성하기</span>
    // </C.Container>
        <Button><IoIosAdd color='#fff' size={24}/>글 작성하기</Button>
  )
}

export default CreateButton