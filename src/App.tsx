import { Outlet } from "react-router-dom";
import { TopBar } from "./layout/TopBar";

function App() {
  return (
    <div className="paperWarp ">
      <header className="text-white text-2xl">Workout tracker </header>
      <main>
        <TopBar />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
