import Home from "./pages/home/Home";
import Chatroom from "./pages/chatroom/Chatroom";
import SideBar from "./components/sidebar/SideBar";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import Features from "./pages/features/Features";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './app.css';

function App() {
  const user = true
  return (
    <div className="App">

    <Router>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat"  element={user ? <Chatroom /> : <Register />} />
        <Route path="/post"  element={user ? <Post /> : <Login />} />
        <Route path="/features"  element={user ? <Features /> : <Login />} />
        <Route path="/profile"  element={user ? <Profile /> : <Login />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
