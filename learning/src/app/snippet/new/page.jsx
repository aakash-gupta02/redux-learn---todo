"use client";
import { useActionState } from "react";
import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NewSnippetPage = () => {

  
  const [formState, formAction] = useActionState(createSnippet,{message:""}
);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <form action={formAction}>
        <h1 className="text-4xl font-bold mb-4">Create New Snippet</h1>
        
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-medium">Title</label>
          <Input 
            type="text" 
            name="title" 
            id="title" 
            className="w-full"
          />
          {formState.errors?.title && (
            <p className="text-red-500 text-sm mt-1">{formState.errors.title}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="code" className="block mb-2 font-medium">Code</label>
          <Textarea 
            name="code" 
            id="code" 
            rows={10}
            className="w-full font-mono text-sm"
          />
          {formState.errors?.code && (
            <p className="text-red-500 text-sm mt-1">{formState.errors.code}</p>
          )}
        </div>

        {formState.message && (
          <div className={`mt-2 ${formState.success ? 'text-green-500' : 'text-red-500'}`}>
            {formState.message}
          </div>
        )}

        <Button type="submit" className="mt-4">
          Save Snippet
        </Button>
      </form>
    </div>
  );
};

export default NewSnippetPage;