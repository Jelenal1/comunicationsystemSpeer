interface Awnser {
  author: string;
  date: string;
  awnser: string;
}

export default function Awnser({ awnser }: { awnser: Awnser }) {
  return (
    <div className="p-4 rounded-lg bg-green-500 grid grid-cols-3 mx-auto my-2 w-2/4 ">
      <h2>👤{awnser.author}</h2>
      <p>💬{awnser.awnser}</p>
      <span className="ml-auto">🗑</span>
    </div>
  );
}
