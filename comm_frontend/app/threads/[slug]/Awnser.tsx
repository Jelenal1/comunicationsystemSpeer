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
		<div className="p-4 rounded-lg bg-green-500 grid grid-cols-3 mx-auto my-2 w-2/4 ">
			<h2>👤{awnser.author}</h2>
			<p>💬{awnser.awnser}</p>
			<button
				onClick={() => {
					handleDelete(threadId, awnser.id);
				}}
			>
				Delete
			</button>
		</div>
	);
}
