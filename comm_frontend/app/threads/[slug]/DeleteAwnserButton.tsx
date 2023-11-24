"use client";
export default function DeleteAwnserButton({
  threadId,
  awnserId,
}: {
  threadId: string;
  awnserId: string;
}) {
  async function handleDelete() {
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_CLIENT}${threadId}/awnsers/${awnserId}`,
      {
        method: "DELETE",
      }
    );
  }

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleDelete()}
    >
      🗑
    </button>
  );
}
