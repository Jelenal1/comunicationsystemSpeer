import Awnser from "./Awnser";
import Newawnser from "./Newawnser";

interface Thread {
	_id: number;
	title: string;
	description: string;
	author: string;
	date: string;
	awnsers: Awnser[];
}

interface Awnser {
	id: string;
	author: string;
	date: string;
	awnser: string;
}

export default async function OneThread({
	params,
}: {
	params: { slug: string };
}) {
	async function getThread(id: string) {
		"use server";
		const response = await fetch(`http://localhost:3000/api/threads/${id}`, {
			cache: "no-store",
		});
		const data = await response.json();
		return data;
	}

	const thread = await getThread(params.slug);

	if (!thread) {
		return <div className="text-2xl font-bold text-white">Loading...</div>;
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mt-2 flex flex-col items-center w-screen">
				<h1 className="text-2xl font-bold">{thread.title}</h1>
				<span>{thread.author}</span>
				<h2>{thread.date}</h2>
				<p>{thread.description}</p>
				<div className="w-full mt-5">
					<Newawnser threadId={params.slug} />
					{thread.awnsers.map((awnser: Awnser) => (
						<Awnser key={awnser.id} awnser={awnser} threadId={params.slug} />
					))}
				</div>
			</div>
		</main>
	);
}
