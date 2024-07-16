import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomEditor.css";

const Editor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: {
      container: [
        [
          { color: [] },
          { header: [1, 2, 3, false] },
          "bold",
          "italic",
          "underline",
          "strike",
          { align: [] },
          "link",
          "image",
          { list: "ordered" },
          { list: "bullet" },
        ],
      ],
    },
  };

  const formats = [
    "size",
    "header",
    "color",
    "align",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleChange}
      />
    </>
  );
};

export default Editor;
