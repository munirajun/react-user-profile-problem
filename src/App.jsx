import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfileInfoForm from "./components/ProfileInfoForm";
import UpdateProfileImage from "./components/UpdateProfileImage";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <Routes>
            <Route path="/" element={<ProfileInfoForm />} />
            <Route
              path="/update-profile-image"
              element={<UpdateProfileImage />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
