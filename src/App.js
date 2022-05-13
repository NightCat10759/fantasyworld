import Home from "./pages/home/Home";
import Chatroom from "./pages/chatroom/Chatroom";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import './app.css';

function App() {
  return (
    <div className="App">
      <Home />
      <SideBar />

    </div>
  );
}

export default App;
