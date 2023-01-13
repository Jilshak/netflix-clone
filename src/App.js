import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import MoviesPage from "./Components/Movies/MoviesPage";
import SignUp from "./Components/SignUp/SignUp";
import AuthenticationState from "./Context/ContextStates";
import MyList from "./Components/MyList/MyList";
import NewAndPopular from "./Components/NewAndPopular/NewAndPopular";
import Series from "./Components/Series/Series";
import Dvd from "./Components/DVD/Dvd";
import Kids from "./Components/Kids/Kids";


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
            <Route path="/MyList" element={<><Navbar /><MyList /></>} />
            <Route path="/NewAndpopular" element={<><Navbar /> <NewAndPopular /></>} />
            <Route path="/series" element={<><Navbar /> <Series /></>} />
            <Route path="/Dvd" element={<><Navbar /> <Dvd /></>} />
            <Route path="/kids" element={<><Navbar /> <Kids /></>} />
          </Routes>
        </AuthenticationState>
      </Router>

    </div>
  );
}

export default App;
