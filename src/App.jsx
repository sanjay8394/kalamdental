import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import StickyMobileCTA from './components/StickyMobileCTA';

import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Doctors from './pages/Doctors';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import TestimonialsPage from './pages/TestimonialsPage';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentInitialData, setAppointmentInitialData] = useState({});

  const handleOpenAppointment = (data = {}) => {
    setAppointmentInitialData(data);
    setIsAppointmentOpen(true);
  };

  const handleSelectTreatment = (treatment) => {
    handleOpenAppointment({ treatment: treatment.title });
  };

  const handleSelectDoctor = (doctor) => {
    handleOpenAppointment({ doctor: doctor.name });
  };

  const handleSelectPackage = (pkg) => {
    handleOpenAppointment({ treatment: `Package: ${pkg.name}` });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-warm-ivory text-charcoal font-sans selection:bg-soft-coral selection:text-white">
        
        {/* Main Navbar */}
        <Navbar onOpenAppointment={() => handleOpenAppointment()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenAppointment={() => handleOpenAppointment()}
                  onSelectTreatment={handleSelectTreatment}
                  onSelectDoctor={handleSelectDoctor}
                  onSelectPackage={handleSelectPackage}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<About onOpenAppointment={() => handleOpenAppointment()} />} 
            />
            <Route 
              path="/treatments" 
              element={
                <Treatments 
                  onSelectTreatment={handleSelectTreatment}
                  onOpenAppointment={() => handleOpenAppointment()}
                />
              } 
            />
            <Route 
              path="/doctors" 
              element={
                <Doctors 
                  onSelectDoctor={handleSelectDoctor}
                  onOpenAppointment={() => handleOpenAppointment()}
                />
              } 
            />
            <Route 
              path="/packages" 
              element={<Packages onSelectPackage={handleSelectPackage} />} 
            />
            <Route 
              path="/gallery" 
              element={<Gallery />} 
            />
            <Route 
              path="/testimonials" 
              element={<TestimonialsPage />} 
            />
            <Route 
              path="/blog" 
              element={<Blog />} 
            />
            <Route 
              path="/blog/:slug" 
              element={<BlogPostPage onOpenAppointment={() => handleOpenAppointment()} />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            <Route 
              path="/privacy" 
              element={<Privacy />} 
            />
            <Route 
              path="/terms" 
              element={<Terms />} 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Appointment Booking Modal */}
        <AppointmentModal
          isOpen={isAppointmentOpen}
          onClose={() => setIsAppointmentOpen(false)}
          initialData={appointmentInitialData}
        />

        {/* Mobile Sticky Quick CTA Bar */}
        <StickyMobileCTA onOpenAppointment={() => handleOpenAppointment()} />

      </div>
    </Router>
  );
}
