"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";

const SnippetCodeEditor = ({ snippet }) => {
  const [code, setcode] = useState(
    snippet ? snippet.code : "// Write your code here..."
  );

  return (
    <div>
      <Editor
        height="60vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
      />
    </div>
  );
};

export default SnippetCodeEditor;
