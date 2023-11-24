import Awnser from "./Awnser";
import AwnserList from "./AwnserList";
import Newawnser from "./Newawnser";

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
    const response = await fetch(`${process.env.BACKEND_BASE_URL}${id}`, {
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
          <AwnserList threadId={params.slug} />
        </div>
      </div>
    </main>
  );
}
