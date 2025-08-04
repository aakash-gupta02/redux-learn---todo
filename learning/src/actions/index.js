"use server";

import { redirect } from "next/navigation";

const { prisma } = require("@/lib/prisma");

export const editSnippet = async (id, snippet) => {
  const updatedSnippet = await prisma.snippet.update({
    where: { id: parseInt(id, 10) },
    data: {
      code: snippet,
    },
  });

  redirect(`/snippet/${updatedSnippet.id}`);
};

export const deleteSnippet = async (id) => {
  await prisma.snippet.delete({
    where: { id: parseInt(id, 10) },
  });

  redirect("/");
};
