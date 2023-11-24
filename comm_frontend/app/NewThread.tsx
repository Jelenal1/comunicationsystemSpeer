export default function NewThread() {
  async function postThread(formdata: FormData) {
    "use server";
    await fetch(`${process.env.BACKEND_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formdata.get("title"),
        description: formdata.get("description"),
        author: formdata.get("author"),
      }),
      cache: "no-store",
    });
  }

  return (
    <div className="p-4 rounded-lg bg-green-500 grid grid-cols-1 mx-auto my-2 w-2/3 lg:w-2/4">
      <form action={postThread} className="flex flex-col gap-2">
        <h2 className="text-2xl mx-auto">⚠ Word Limit: 40 ⚠</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="text-black"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="text-black"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="text-black"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
