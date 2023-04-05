import "./App.css";
import Homescreen from "./Components/HomeScreen/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  const user = null;
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
