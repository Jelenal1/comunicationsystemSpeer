import Thread from './Thread';

export default function Home() {
  const mockData = [
    {
      id: 1,
      title: 'Wierd thread',
      description: 'This is a wierd thread',
      author: 'Lolo',
      date: '12.09.2022',
      awnsers: [],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mt-2 flex flex-col w-screen'>
        {mockData.map((thread) => (
          <Thread thread={thread} key={thread.id} />
        ))}
      </div>
    </main>
  );
}
