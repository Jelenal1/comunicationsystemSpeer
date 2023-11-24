import DeleteAwnserButton from "./DeleteAwnserButton";
import { redirect } from "next/navigation";

interface Awnser {
  id: string;
  author: string;
  date: string;
  awnser: string;
}

export default function Awnser({
  awnser,
  threadId,
}: {
  awnser: Awnser;
  threadId: string;
}) {
  async function handleDelete() {
    "use server";
    await fetch(
      `${process.env.BACKEND_BASE_URL}${threadId}/awnsers/${awnser.id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );
    redirect(`/threads/${threadId}`);
  }

  

  return (
    <div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4 ">
      <DeleteAwnserButton handleDelete={handleDelete} />

      <div className="grid grid-cols-2">
        <h2>👤{awnser.author}</h2>
      </div>
      <p className="overflow-hidden h-full">💬{awnser.awnser.slice(1, 40)}</p>
    </div>
  );
}
