import SnippetCodeEditor from "@/components/SnippetCodeEditor";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippet = async ({ params }) => {
  const { id } = await params;

  // Fetch the snippet data using the id
  const snippet = await prisma.snippet.findUnique({
    where: { id: parseInt(id) },
  });

  return (
    <div>
      <SnippetCodeEditor snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
