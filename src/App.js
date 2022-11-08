import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./routes/Dashboard/Dashboard.component";
import Home from "./routes/Home/Home.component";
import Login from "./routes/Login/Login.component";
import Nav from "./routes/Nav/nav.component";
import Signup from "./routes/Signup/Signup.component";

function App() {
  const { authIsReady, user } = useContext(AuthContext);
  return (
    <>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index path="/" element={<Home />} />
            <Route
              path="/login"
              element={user ? <Navigate to={"/dashboard"} /> : <Login />}
            />
            <Route path="/signup" element={user ? <Navigate to={"/dashboard"} /> :<Signup />} />
            <Route path="/dashboard" element={!user ? <Navigate to={"/login"} /> : <Dashboard />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
