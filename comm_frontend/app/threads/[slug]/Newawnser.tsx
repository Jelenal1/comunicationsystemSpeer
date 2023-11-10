"use client";

interface Awnser {
  author: string;
  awnser: string;
}
async function postAwnser(id: string, awnser: Awnser) {
  await fetch(`http://localhost:3000/api/threads/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ awnser }),
  });
}

export default function Newawnser({ id }: { id: string }) {
  return (
    <div className="p-4 rounded-lg bg-green-500 mx-auto my-2 w-2/4 ">
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          const author = (e.target as any).author.value;
          const awnser = (e.target as any).awnser.value;
          postAwnser(id, { author, awnser });
        }}
      >
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="mr-2 text-black"
        />
        <input
          type="text"
          name="awnser"
          placeholder="Awnser"
          className="text-black w-full"
        />
        <input type="submit" value="Send" className="ml-2" />
      </form>
    </div>
  );
}
