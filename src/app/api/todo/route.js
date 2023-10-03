import connectMongoDB from "../../../../lib/mongodb";
import Todo from "../../../../models/todo";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Todo.create({title, description});
    return NextResponse.json({message: "Todo Created"}, {status: 201})
}

export async function GET() {
    try {
        await connectMongoDB();
        const todos = await Todo.find(); // Use plural 'todos'
        return NextResponse.json({ todos }); // Return 'todos' as an array
      } catch (error) {
        console.error("Error fetching todos: ", error);
        return NextResponse.error({ message: "Failed to fetch todos" }, { status: 500 });
      }
}