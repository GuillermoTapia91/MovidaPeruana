import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/SignIn" element={<SignInView />} />
        
      </Routes>
    </BrowserRouter>
  );
}