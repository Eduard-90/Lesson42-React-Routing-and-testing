import "./App.css";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink to="/Main">Main</NavLink>
          <NavLink to="/Posts">Posts</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </nav>

        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Posts/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
