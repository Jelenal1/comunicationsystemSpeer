"use client";

import { useState } from "react";

interface Awnser {
  author: string;
  awnser: string;
}
async function postAwnser(id: string, author: string, awnser: string) {
  await fetch(`http://localhost:3000/api/threads/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "author": author,
      "awnser": awnser,
    })
})
}

export default function Newawnser({ id }: { id: string }) {
  const [awnser, setAwnser] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="p-4 rounded-lg bg-green-500 mx-auto my-2 w-2/4 ">
      <form
        className="flex"
        onSubmit={e => {
          e.preventDefault();
          postAwnser(id, author, awnser);
        }}
      >
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="mr-2 text-black"
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          name="awnser"
          placeholder="Awnser"
          className="text-black w-full"
          onChange={e => setAwnser(e.target.value)}
        />
        <input type="submit" value="Send" className="ml-2" />
      </form>
    </div>
  );
}
