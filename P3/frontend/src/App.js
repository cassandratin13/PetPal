import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import SignUpSeeker from './pages/SignUpSeeker/SignUpSeeker';
import SignUpShelter from './pages/SignUpShelter/SignUpShelter';
import { Login } from './pages/LogIn/LogIn';
import LogOut from './pages/LogOut/LogOut';
import Layout from './components/Layout'
import NotFound from './pages/NotFound';
import ApplicationForm from './pages/ApplicationForm';
import ApplicationDetail from './pages/ApplicationDetail';
import { ViewMyProfile } from './pages/Profile/ViewMyProfile'; 
import ShelterDetail from './pages/ShelterDetail';
import CreateReview from './pages/ShelterDetail/Reviews/CreateReview';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-up/" element={<SignUp />} />
        <Route path="sign-up-seeker/" element={<SignUpSeeker />} />
        <Route path="sign-up-shelter/" element={<SignUpShelter />} />
        <Route path="log-in/" element={<Login />} />
        <Route path="log-out/" element={<LogOut />} />
        <Route path="profile/" element={<ViewMyProfile />} />
        <Route path="application/form/" element={<PrivateRoute>  <ApplicationForm /> </PrivateRoute>} />
        <Route path="application/detail/" element={<ApplicationDetail />} />
        <Route path="shelter/:shelterId/:shelterName" element={<PrivateRoute> <ShelterDetail /> </PrivateRoute>} />
        <Route path="shelter/:shelterId/:shelterName/review" element={<PrivateRoute> <CreateReview /> </PrivateRoute>} />
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
  
}

export default App;
