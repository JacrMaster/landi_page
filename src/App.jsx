import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProtectedRoute } from "./components/ProtectedRoute";
//pages
import { LayoutAuth } from "./layouts/LayoutAuth";
import { Login } from "./pages/auth/Login";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { Home } from "./pages/admin/Home";
import Billing from "./pages/admin/Billing";
import Customer  from "./pages/admin/Customer";
import Plans  from "./pages/admin/Plans";
import Configuration  from "./pages/admin/Configuration";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutAuth />} >
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<LayoutAdmin />} >
        <Route path="/home" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />

        <Route path="/facturacion" element={
          <ProtectedRoute><Billing /></ProtectedRoute>
        } />


        <Route path="/clientes" element={
          <ProtectedRoute><Customer /></ProtectedRoute>
        } />
        <Route path="/planes" element={
          <ProtectedRoute>
              <Plans />
          </ProtectedRoute>
        } />
        <Route path="/configuracion" element={
          <ProtectedRoute><Configuration /></ProtectedRoute>
        } />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
