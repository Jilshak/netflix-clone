import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Movies from "./Components/Movies/Movies";
import MoviesPage from "./Components/Movies/MoviesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/" element={<><Navbar /><HomePage /></>}/>
          <Route path="/Movies" element={<><Navbar /><MoviesPage /></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
