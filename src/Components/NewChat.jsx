export default function NewChat() {
  return (
    <div className="bg-black w-full px-8 realtive">
      <div className="h-[calc(100%-4.5rem)]"></div>
      <div className="w-full flex gap-2">
        <input
          className="w-full rounded-2xl bg-slate-800 p-4 text-white"
          type="text"
          placeholder="Type..."
        />
        <button className="text-white px-4 py-2">Send</button>
      </div>
    </div>
  );
}
