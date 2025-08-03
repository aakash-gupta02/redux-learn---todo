import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <>
      <div className="">
        <div>
          <h1 className="text-4xl font-bold mb-4">Home</h1>
          <div className="flex justify-between items-center">
            <h1>Snippets</h1>
            <Link href="/snippet/new">
              <Button>New</Button>
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {snippets.map((snippet) => (
              <div
                key={snippet.id}
                className="border border-gray-300 rounded-xl shadow-sm p-5 bg-white hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 truncate mb-2">
                  {snippet.title}
                </h2>
                <div className="bg-gray-100 p-3 rounded overflow-x-auto max-h-40 text-sm font-mono text-gray-700 whitespace-pre-wrap">
                  <code>{snippet.code}</code>
                </div>
                <Link href={`/snippet/${snippet.id}`} className="block mt-4">
                  <Button className="w-full">View Snippet</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
