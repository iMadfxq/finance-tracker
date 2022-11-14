import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./routes/Dashboard/Dashboard.component";
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
            <Route index path="/" element={user ? <Dashboard user={user}/> : <Navigate to={'/signup'} />} />
            <Route
              path="/login"
              element={user ? <Navigate to={"/"} /> : <Login />}
            />
            <Route path="/signup" element={user ? <Navigate to={"/"} /> :<Signup />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
