import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const NewSnippetPage = () => {
  async function handleSubmit(formData) {
    "use server";
    const title = formData.get("title");
    const code = formData.get("code");

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("Snippet created:", snippet);
    redirect("/");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <h1 className="text-4xl font-bold mb-4">Create New Snippet</h1>
        <div>
          <label>Title</label>
          <Input type="text" name="title" id="title" />
        </div>
        <div>
          <label>Code</label>
          <Textarea type="text" name="code" id="code" />
        </div>

        <Button type="submit" className="mt-4">
          Save Snippet
        </Button>
      </form>
    </div>
  );
};

export default NewSnippetPage;
