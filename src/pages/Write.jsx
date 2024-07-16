import React from "react";
import * as W from "./Write.style";
import Editor from "../components/Write/Editor";
import { Button } from "../components/Button.style";
import WriteDatePicker from "../components/Write/WriteDatePicker";
import { useState } from "react";

const Write = () => {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

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
          <Button $noIcon="true">저장하기</Button>
        </W.Header>

        <Editor/>
      </W.Container>
    </W.Wrapper>
  );
};

export default Write;
