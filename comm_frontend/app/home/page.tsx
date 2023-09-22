import Thread from './Thread';

interface Thread {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  awnsers: string[];
}

async function getThreads() {
  const response = await fetch('http://localhost:3000/api/threads');
  const data = await response.json();
  return data;
}

export default async function Home() {
  const threads = await getThreads();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-2 flex flex-col w-screen">
        {threads.map((thread: Thread) => (
          <Thread thread={thread} key={thread.id} />
        ))}
      </div>
    </main>
  );
}
