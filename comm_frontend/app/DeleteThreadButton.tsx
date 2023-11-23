"use client";
export default function DeleteThreadButton({
	id,
	handleDelete,
}: {
	id: string;
	handleDelete: (id: string) => void;
}) {
	return (
		<button
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			onClick={() => handleDelete(id)}
		>
			🗑
		</button>
	);
}
