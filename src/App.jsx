import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import EventShowcase from './components/EventShowcase';
import BrandMatrix from './components/BrandMatrix';
import CorePlans from './components/CorePlans';
import ContactFooter from './components/ContactFooter';
import JoinModal from './components/JoinModal';

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('逐光成长计划');

  const handleOpenJoinModal = (planName = '逐光成长计划') => {
    setSelectedPlan(planName);
    setIsJoinModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Hero />
        <About />
        <Portfolio />
        <EventShowcase />
        <BrandMatrix />
        <CorePlans onOpenJoinModal={handleOpenJoinModal} />
      </div>
      <ContactFooter onOpenJoinModal={handleOpenJoinModal} />
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </>
  );
}

export default App;

