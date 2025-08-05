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

// export const createSnippet = async (message  , snippet) => {

//   if (!snippet.title || !snippet.code) {
//     return message("Title and code are required");
//   }

//   await prisma.snippet.create({
//     data: {
//       title: snippet.title,
//       code: snippet.code,
//     },
//   });
// };

export const createSnippet = async (prevState, formData) => {
  try {
    // Directly access form data (no need for snippet.formData)
    const title = formData.get("title");
    const code = formData.get("code");

    console.log("Received data:", { title, code });

    // Validate inputs
    if (!title || title.trim() === "") {
      return { message: "Title is required", success: false };
    }
    if (!code || code.trim() === "") {
      return { message: "Code is required", success: false };
    }

    // Create snippet in database
    const createdSnippet = await prisma.snippet.create({
      data: {
        title: title.trim(),
        code: code.trim(),
      },
    });

    console.log("Created snippet:", createdSnippet);

    // Return success state
    return { 
      message: "Snippet created successfully!", 
      success: true,
      snippet: createdSnippet,
    };


  } catch (error) {
    console.error("Error creating snippet:", error);
    return { 
      message: "Failed to create snippet - please try again", 
      success: false 
    };
  }
};
