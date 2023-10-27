interface Thread {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  awnsers: string[];
}

export default function Thread({ thread }: { thread: Thread }) {
  return (
    <div className="p-4 rounded-lg bg-green-500 flex mx-auto my-2 w-2/3 lg:w-2/4 ">
      <div className="mx-auto flex flex-col hover:cursor-pointer">
        <h1 className="text-2xl font-bold">{thread.title}</h1>
        <h2>{thread.date}</h2>
        <span>{'💬' + thread.awnsers.length}</span>
      </div>
    </div>
  );
}
