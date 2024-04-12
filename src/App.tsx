import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="paperWarp ">
      <header>Workout tracker </header>
      <main>
        <Outlet />
        <Button variant={"outline"}>Click me</Button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
