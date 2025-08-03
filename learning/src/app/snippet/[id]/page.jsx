import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const ViewSnippet = async ({ params }) => {
  const id =  parseInt(params.id, 10);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <div className="p-6 text-red-500">Snippet not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4">{snippet.title}</h1>

        <div className="flex space-x-2">
          <Button variant="destructive">Delete</Button>
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </div>
      </div>{" "}
      <div className="bg-gray-100 p-4 rounded font-mono whitespace-pre-wrap text-sm">
        {snippet.code}
      </div>
    </div>
  );
};

export default ViewSnippet;
