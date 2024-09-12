import { BrowserRouter, Router, Route, Routes } from "react-router-dom"

import {ProtectedRoute} from "./components/ProtectedRoute";
//pages
import { LayoutAuth } from "./layouts/LayoutAuth";
import { Login } from "./pages/auth/Login";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { Home } from "./pages/admin/Home";
import { Error404 } from "./pages/Error404";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<LayoutAuth/>} >
          <Route index element = {<Login/>}/>
      </Route>
      <Route path="/home" element= {<LayoutAdmin/>} >
          <Route index element = {
            <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          }/>
      </Route>
      <Route path="*" element = {<Error404/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
