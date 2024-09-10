import { BrowserRouter, Router, Route, Routes } from "react-router-dom"

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
      <Route path="/auth" element= {<LayoutAuth/>} >
          <Route index element = {<Login/>}/>
      </Route>
      <Route path="/" element= {<LayoutAdmin/>} >
          <Route index element = {<Home/>}/>
      </Route>
      <Route path="*" element = {<Error404/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
