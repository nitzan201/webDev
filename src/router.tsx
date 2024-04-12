import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components here (example)
import Home from "./pages/Home";
import App from "./App";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
