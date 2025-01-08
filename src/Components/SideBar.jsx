import { Fragment } from "react";

export default function SideBar() {
  return (
    <Fragment>
      <aside className="w-1/3 px-8 py-16 bg-slate-700 text-slate-200 md:w-72">
        <h2 className="text-xl mb-8">Your Chats</h2>
        <button className="bg-[#206A5D] px-2 py-1 rounded-md shadow-sm border-1 border-black hover:bg-[#379777]">
          + Add New Chat
        </button>
      </aside>
    </Fragment>
  );
}
