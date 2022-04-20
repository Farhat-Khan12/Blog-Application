import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Setting from "./components/Settings/Setting";
import Single from "./components/Single/Single";
import Topbar from "./components/topbar/Topbar";
import Write from "./components/Write/Write";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  const {user} = useContext(Context);
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/settings" element={user ? <Setting /> :<Register />} />
          <Route path="/write" element={user ? <Write /> :<Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
