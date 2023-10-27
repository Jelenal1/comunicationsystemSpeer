async function getThread(id: string) {
  const response = await fetch(`http://localhost:3000/api/threads/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const thread = await getThread(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-2 flex flex-col w-screen">
        <h1>{thread.title}</h1>
      </div>
    </main>
  );
}
