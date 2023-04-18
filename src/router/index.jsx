import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView } from "../pages";
import MainLayout from "../Layouts/mainLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<MainLayout />}> */}
          <Route path="/" element={<HomeView />} />
      
        <Route path="/SignIn" element={<SignInView />} />
      </Routes>
    </BrowserRouter>
  );
}