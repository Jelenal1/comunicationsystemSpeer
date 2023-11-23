import { redirect } from "next/navigation";

export default function Newawnser({ threadId }: { threadId: string }) {
	async function postAwnser(formdata: FormData) {
		"use server";
		try {
			await fetch(`http://backend:3000/api/threads/${threadId}/awnsers`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					author: formdata.get("author"),
					awnser: formdata.get("awnser"),
				}),
				cache: "no-store",
			});
		} catch (err) {
			console.log(err);
		}
		redirect(`/threads/${threadId}`);
	}

	return (
		<div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4 ">
			<form className="flex flex-col gap-2" action={postAwnser}>
				<h2 className="lg:text-2xl mx-auto">⚠ Word Limit: 40 ⚠</h2>
				<input
					type="text"
					name="author"
					placeholder="Author"
					className="text-black"
				/>
				<input
					type="text"
					name="awnser"
					placeholder="Anwser"
					className="text-black"
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
