import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView, SignUpView } from "../pages";
import MainLayout from "../NavBar/mainLayout";
import NavBarAuth from "../NavBarAuth";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomeView />} /> 
      </Route>
      <Route path="/SignUp" element={<SignUpView />} />
      <Route element={<NavBarAuth />}>
        <Route path="/Principal" element={<SignInView />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}