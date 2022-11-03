import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./routes/Dashboard/Dashboard.component";
import Home from "./routes/Home/Home.component";
import Login from "./routes/Login/Login.component";
import Nav from "./routes/Nav/nav.component";
import Signup from "./routes/Signup/Signup.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
