import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfileInfoForm from "./components/ProfileInfoForm";
import UpdateProfileImage from "./components/UpdateProfileImage";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 rounded-4 bg-light p-5">
          <Router>
            <Routes>
              <Route path="/" element={<ProfileInfoForm />} />
              <Route
                path="/update-profile-image"
                element={<UpdateProfileImage />}
              />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
