import SnippetCodeEditor from "@/components/SnippetCodeEditor";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippet = async ({ params }) => {
  const id = parseInt(params.id, 10);

  // Fetch the snippet data using the id
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold mb-4">Edit Snippet:</h1>
        <Button>Save</Button>
      </div>

      <SnippetCodeEditor snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
