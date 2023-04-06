import "./App.css";
import Homescreen from "./Components/HomeScreen/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./Components/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth, "userAuth");
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route exact path="/" element={<Homescreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
