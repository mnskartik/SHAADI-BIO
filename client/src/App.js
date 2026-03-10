import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBiodata from "./pages/CreateBioData";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />


        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-biodata"
          element={
            <ProtectedRoute>
              <CreateBiodata />
            </ProtectedRoute>
          }
        />
        
        <Route
path="/edit/:id"
element={
  <ProtectedRoute>
    <CreateBiodata />
  </ProtectedRoute>
}
/>
        <Route
          path="/preview/:id"
          element={
            <ProtectedRoute>
              <Preview />
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>

  );

}

export default App;