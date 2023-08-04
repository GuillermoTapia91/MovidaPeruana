import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignUpView, MiInformacionView } from "../pages";
import MainLayout from "../Layouts/mainLayout";
import NavBarAuth from "../navBarAuth";
import { MiPerfilView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path="/SignUp" element={<SignUpView />} />
        <Route element={<NavBarAuth/>}>
          <Route path="/mi-informacion" element={<MiInformacionView />} />
          <Route path="/miperfil" element={<MiPerfilView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
