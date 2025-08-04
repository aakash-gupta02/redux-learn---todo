"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { editSnippet } from "@/actions";

const SnippetCodeEditor = ({ snippet }) => {
  const [code, setcode] = useState(
    snippet ? snippet.code : "// Write your code here..."
  );

  const handleEdit = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <form
        action={handleEdit}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">Edit Snippet:</h1>
        <Button>Save</Button>
      </form>

      <Editor
        height="60vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(value) => setcode(value)}
      />
    </div>
  );
};

export default SnippetCodeEditor;
