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
		<div className="p-4 rounded-lg bg-green-500 mx-auto my-2 w-2/4 ">
			<form
				className="flex"
				onSubmit={async (e) => {
					e.preventDefault();
					await postAwnser(threadId, author, awnser);
					onAwnser();
				}}
			>
				<input
					type="text"
					name="author"
					placeholder="Author"
					className="mr-2 text-black"
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<input
					type="text"
					name="awnser"
					placeholder="Awnser"
					className="text-black w-full"
					onChange={(e) => setAwnser(e.target.value)}
				/>
				<input type="submit" value="Send" className="ml-2" />
			</form>
		</div>
	);
}
