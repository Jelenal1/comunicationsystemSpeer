import NewThread from "./NewThread";
import Thread from "./Thread";
import ThreadList from "./ThreadList";

interface Thread {
  _id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  awnsers: string[];
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-2 flex flex-col w-screen">
        <NewThread />
        <ThreadList />
      </div>
    </main>
  );
}
