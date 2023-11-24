import NewThread from "./NewThread";
import ThreadList from "./ThreadList";
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
