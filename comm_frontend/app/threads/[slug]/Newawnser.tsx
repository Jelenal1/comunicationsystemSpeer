"use client";

import { useState } from "react";
async function postAwnser(threadId: string, author: string, awnser: string) {
	try {
		const response = await fetch(
			`http://localhost:3000/api/threads/${threadId}/awnsers`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					author: author,
					awnser: awnser,
				}),
			}
		);
	} catch (err) {
		console.log(err);
	}
}

export default function Newawnser({
	threadId,
	onAwnser,
}: {
	threadId: string;
	onAwnser: () => void;
}) {
	const [awnser, setAwnser] = useState("");
	const [author, setAuthor] = useState("");

	return (
		<div className="p-4 rounded-lg bg-green-500 md:mx-auto my-2 mx-4 md:w-2/4">
			<form
				className="flex flex-col gap-2"
				onSubmit={async (e) => {
					e.preventDefault();
					await postAwnser(threadId, author, awnser);
					onAwnser();
				}}
			>
				<h2 className="text-2xl mx-auto">⚠ Word Limit: 40 ⚠</h2>
				<input
					type="text"
					name="author"
					placeholder="Author"
					className="text-black"
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<input
					type="text"
					name="awnser"
					placeholder="Anwser"
					className="text-black"
					onChange={(e) => setAwnser(e.target.value)}
				/>
				<input
					type="submit"
					value="Send"
					className="bg-teal-500 rounded-md px-3 mt-1 pb-1 w-fit mx-auto"
				/>
			</form>
		</div>
	);
}
