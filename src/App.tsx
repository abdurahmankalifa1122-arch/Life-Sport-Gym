/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Membership } from './components/Membership';
import { Trainers } from './components/Trainers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { DeploymentInfoModal } from './components/DeploymentInfoModal';

export default function App() {
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#E2E8F0] selection:bg-amber-500 selection:text-black flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero onOpenInquiry={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <About />

        <Services onSelectService={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <Membership onSelectPlan={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <WhyChooseUs />

        <Trainers />

        <Gallery />

        <Testimonials />

        <LocationMap />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <FloatingMobileBar />

      {/* GitHub Pages Deployment Info Modal */}
      <DeploymentInfoModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}

