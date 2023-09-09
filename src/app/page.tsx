import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getItems = async () => {
  const res = await prisma.todo.findMany();
  return res;
}

const Home = async () => {

  const items  = await getItems();
  console.log(items);

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
          { items.map((todo, index) => (
            <tr key={todo.id}>
            <td className="text-center">{index + 1 }</td>
            <td className="text-center">{todo.title}</td>
            <td className="text-center">{todo.complete.toString()}</td>
          </tr>
          ))}
          
        </tbody>
      </table>

    </div>
  )
}

export default Home