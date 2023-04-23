import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView, SignUpView } from "../pages";
import MainLayout from "../Layouts/mainLayout";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path="/SignIn" element={<SignInView />} />
        <Route path="/SignUp" element={<SignUpView />} />
      </Routes>
    </BrowserRouter>
  );
}