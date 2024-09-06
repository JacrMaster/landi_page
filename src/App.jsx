import { BrowserRouter, Router, Route, Routes } from "react-router-dom"

//pages
import { Login } from "./pages/auth/Login";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { Home } from "./pages/admin/Home";
import { Error404 } from "./pages/Error404";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element = {<Login/>} />
      <Route path="/" element= {<LayoutAdmin/>} >
          <Route index element = {<Home/>}/>
      </Route>
      <Route path="*" element = {<Error404/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
