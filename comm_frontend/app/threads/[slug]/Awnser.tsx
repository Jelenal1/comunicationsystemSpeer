"use client";

interface Awnser {
	id: string;
	author: string;
	date: string;
	awnser: string;
}

export default function Awnser({
	awnser,
	threadId,
	onDelete,
}: {
	awnser: Awnser;
	threadId: string;
	onDelete: () => void;
}) {
	async function handleDelete(threadId: string, awnserId: string) {
		await fetch(
			`http://localhost:3000/api/threads/${threadId}/awnsers/${awnserId}`,
			{
				method: "DELETE",
			}
		);
		onDelete();
	}

	return (
		<div className="p-4 rounded-lg bg-green-500 md:mx-auto my-2 mx-4 md:w-2/4">
			<div className="grid grid-cols-2">
				<h2>👤{awnser.author}</h2>
				<button onClick={() => handleDelete(threadId, awnser.id)}>🗑</button>
			</div>

			<p className="overflow-hidden h-full">💬{awnser.awnser.slice(1, 40)}</p>
		</div>
	);
}
