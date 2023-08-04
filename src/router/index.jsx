import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomeView,
  SignInView,
  SignUpView,
  MiInformacionView,
  CrearEstablecimientoView,
} from "../pages";
import MainLayout from "../Layouts/mainLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path="/signin" element={<SignInView />} />
        <Route path="/SignUp" element={<SignUpView />} />
        <Route path="/mi-informacion" element={<MiInformacionView />} />
        <Route
          path="/crear-establecimiento"
          element={<CrearEstablecimientoView />}
        />
      </Routes>
    </BrowserRouter>
  );
}
