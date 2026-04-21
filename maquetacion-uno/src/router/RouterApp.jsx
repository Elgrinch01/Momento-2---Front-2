import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}