"use client";

interface Awnser {
  author: string;
  date: string;
  awnser: string;
}

export default function Awnser({ awnser }: { awnser: Awnser }) {

  async function handleDelete(id: string) {
    await fetch(`http://localhost:3000/api/threads/awnsers/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="p-4 rounded-lg bg-green-500 grid grid-cols-3 mx-auto my-2 w-2/4 ">
      <h2>👤{awnser.author}</h2>
      <p>💬{awnser.awnser}</p>
      <span className="ml-auto">🗑</span>
    </div>
  );
}
