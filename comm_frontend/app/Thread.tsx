import Link from "next/link";
import DeleteThreadButton from "./DeleteThreadButton";
import { redirect } from "next/navigation";

interface Thread {
	_id: string;
	title: string;
	description: string;
	author: string;
	date: string;
	awnsers: string[];
}

export default function Thread({ thread }: { thread: Thread }) {
	async function handleDelete(id: string) {
		"use server";
		await fetch(`http://localhost:3000/api/threads/${id}`, {
			method: "DELETE",
		});
		redirect("/");
	}

	return (
		<div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4 ">
			<DeleteThreadButton id={thread._id} handleDelete={handleDelete} />
			<Link href={`/threads/${thread._id}`}>
				<div className="grid lg:grid-cols-2 gap-4 hover:cursor-pointer">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">{thread.title}</h1>
						<h2>{thread.date}</h2>
						<span>{"💬" + thread.awnsers.length}</span>
					</div>

					<div>
						<h1 className="text-2xl font-bold">Description</h1>
						<p>{thread.description}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
