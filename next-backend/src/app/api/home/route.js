import { connectDB } from "@/app/lib/config/db";
import { TodoModel } from "@/app/lib/models/todo.model";
import next from "next";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};

loadDB();

export async function GET() {
  try {
    const todos = await TodoModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Hello from the home route!" });
}

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const todo = await TodoModel.create({
      text,
    });

    return NextResponse.json({
      message: "Todo created successfully!",
      todo,
      status: 201,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
