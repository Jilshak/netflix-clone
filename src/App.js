import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import MoviesPage from "./Components/Movies/MoviesPage";
import SignUp from "./Components/SignUp/SignUp";
import AuthenticationState from "./Context/ContextStates";


function App() {
  return (
    <div className="App">

      <Router>
        <AuthenticationState>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<><Navbar /><HomePage /></>} />
            <Route path="/Movies" element={<><Navbar /><MoviesPage /></>} />
          </Routes>
        </AuthenticationState>
      </Router>

    </div>
  );
}

export default App;
