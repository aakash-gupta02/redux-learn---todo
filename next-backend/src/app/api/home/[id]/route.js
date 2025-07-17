import { connectDB } from "@/app/lib/config/db";
import { TodoModel } from "@/app/lib/models/todo.model";
import { NextResponse } from "next/server";

const loadDB = async () => {
  await connectDB();
};

loadDB();
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const deletedProduct = await TodoModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
export async function PUT(request, { params }) {
    try {
        const { id } = params;

        // Find the todo by ID
        const todo = await TodoModel.findById(id);

        if (!todo) {
            return NextResponse.json({ message: "Todo not found" }, { status: 404 });
        }

        // Toggle the completed status
        todo.completed = !todo.completed;

        await todo.save();

        return NextResponse.json({ message: "Todo updated", todo });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
