import Awnser from "./Awnser";

interface Awnser {
  id: string;
  author: string;
  date: string;
  awnser: string;
}
async function getThread(id: string) {
  const response = await fetch(`http://localhost:3000/api/threads/${id}`);
  const data = await response.json();
  return data;
}

async function postAwnser(id: string, awnser: string) {
  const response = await fetch(`http://localhost:3000/api/threads/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ awnser }),
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const thread = await getThread(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-2 flex flex-col items-center w-screen">
        <h1 className="text-2xl font-bold">{thread.title}</h1>
        <span>{thread.author}</span>
        <h2>{thread.date}</h2>
        <p>{thread.description}</p>
        <div className="w-full mt-5">
          {thread.awnsers.map((awnser: Awnser) => (
            <Awnser awnser={awnser} key={awnser.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
