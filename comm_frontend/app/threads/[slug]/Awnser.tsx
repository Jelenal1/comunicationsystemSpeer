import DeleteAwnserButton from "./DeleteAwnserButton";

interface Awnser {
  id: string;
  author: string;
  date: string;
  awnser: string;
}

export default function Awnser({
  awnser,
  threadId,
}: {
  awnser: Awnser;
  threadId: string;
}) {
  return (
    <div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4 ">
      <DeleteAwnserButton threadId={threadId} awnserId={awnser.id} />
      <div className="grid grid-cols-2">
        <h2>👤{awnser.author}</h2>
      </div>
      <p className="overflow-hidden h-full">💬{awnser.awnser.slice(0, 40)}</p>
    </div>
  );
}
