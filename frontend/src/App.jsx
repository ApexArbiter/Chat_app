import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Setting from "./pages/Setting.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthStore } from "./store/useAuthStore.jsx";

function App() {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />

        {/* <Route path="*" element={<h1>Pagr Not Found</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
