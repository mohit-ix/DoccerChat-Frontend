import NewChat from "./Components/NewChat.jsx";
import SideBar from "./Components/SideBar.jsx";

function App() {
  return (
    <main className="h-screen bg-black flex gap-8">
      <SideBar />
      <NewChat />
    </main>
  );
}

export default App;
