// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const getItems = async () => {
//   const res = await prisma.todo.findMany();
//   return res;
// }
// import React, { useEffect, useState } from 'react';

const getTodos = async () => {
  try {
    const api_url = process.env.APP_URL + "/api/todo"
    const res = await fetch(api_url, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }

    const data = await res.json(); // Parse JSON response

    // Ensure data.todos is defined, default to an empty array if not
    if (!data.todos) {
      data.todos = [];
    }
    return data;

  } catch (error) {
    console.log("Error loading todos: ", error);
  }
}


export default async function Home() {
  const { todos } = await getTodos();
  console.log(todos);

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          { todos.map((todo, index) => (
            <tr>
            <td className="text-center">{index + 1 }</td>
            <td className="text-center">{todo.title}</td>
            <td className="text-center">{todo.description}</td>
          </tr>
          ))}
          
        </tbody>
      </table>

    </div>
  )
}