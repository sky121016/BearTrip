import React from "react";
import * as W from "./Write.style";
import Editor from "../components/Write/Editor";
import { Button } from "../components/common/Button.style";
import WriteDatePicker from "../components/Write/WriteDatePicker";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClickSave = ()=>{
    navigate('/list');
  }

  return (
    <W.Wrapper>
      <W.Container>
        <W.Header>
          <WriteDatePicker></WriteDatePicker>
          <W.Title
            placeholder="제목을 입력하세요"
            onChange={handleTitle}
            value={title}
          ></W.Title>
          <Button $noIcon="true" onClick={handleClickSave}>저장하기</Button>
        </W.Header>

        <Editor/>
      </W.Container>
    </W.Wrapper>
  );
};

export default Write;
