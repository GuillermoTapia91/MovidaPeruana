import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignUpView, MiInformacionView, CrearEstablecimientoView, LandingPageView } from "../pages";
import MainLayout from "../Layouts/mainLayout";
import NavBarAuth from "../navBarAuth";
import { MiPerfilView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/landing" element={<LandingPageView />} />
        </Route>
          <Route path="/SignUp" element={<SignUpView />} />
        <Route element={<NavBarAuth/>}>
          <Route path="/" element={<HomeView />} />
          <Route path="/mi-informacion" element={<MiInformacionView />} />
          <Route path="/miperfil" element={<MiPerfilView/>}/>
          <Route path="/crear-establecimiento" element={<CrearEstablecimientoView />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
