"use client";
export default function DeleteThreadButton({ threadId }: { threadId: string }) {
  async function handleDelete() {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT}${threadId}`, {
      method: "DELETE",
    });
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
