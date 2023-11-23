import NewThread from "./NewThread";
import Thread from "./Thread";

interface Thread {
	_id: string;
	title: string;
	description: string;
	author: string;
	date: string;
	awnsers: string[];
}

async function getThreads() {
	const response = await fetch("http://backend:3000/api/threads", {
		cache: "no-store",
	});
	const data = await response.json();
	return data;
}

export default async function Home() {
	const threads = await getThreads();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mt-2 flex flex-col w-screen">
				<NewThread />
				{threads.length === 0 ? (
					<div className="text-2xl font-bold text-white mx-auto">
						No Threads
					</div>
				) : (
					threads.map((thread: Thread) => (
						<Thread thread={thread} key={thread._id} />
					))
				)}
			</div>
		</main>
	);
}
