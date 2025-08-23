import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Geolocation from './components/GeoLocation';
import Bookappointment from './components/Bookappointment';
import Myappointment from './components/Myappointment';
import Layout from './Layout';
import Contact from './components/Contact/Contact';
import Chat from './components/Chat';
import HealthRecommend from './components/HealthRecommend';
import MedicalDiagnosisForm from './components/MedicalDiagnosis/MediacalDiagnosis';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Geolocation />
        <Routes>
          {/* Login/Register page */}
          <Route path="/" element={<About />} />
          <Route path="/register" element={<About />} />
          
          {/* Protected routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookappointment" element={<Bookappointment/>} />
            <Route path="myappointment" element={<Myappointment />} />
            <Route path="contact" element={<Contact />} />
            <Route path='room/:code' element={<Chat/>}/>
            <Route path='/getHealthRecommendation' element={<HealthRecommend/>}/>
            <Route path='/medicalDiagnosis' element={<MedicalDiagnosisForm/>}/>
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
