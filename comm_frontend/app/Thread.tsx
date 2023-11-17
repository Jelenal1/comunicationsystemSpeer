import Link from "next/link";

interface Thread {
	_id: number;
	title: string;
	description: string;
	author: string;
	date: string;
	awnsers: string[];
}

export default function Thread({ thread }: { thread: Thread }) {
	return (
		<div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4 ">
			<Link href={`/threads/${thread._id}`}>
				<div className="grid grid-cols-2 hover:cursor-pointer">
					<div>
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
