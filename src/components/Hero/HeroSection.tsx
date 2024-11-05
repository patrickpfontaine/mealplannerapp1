import React from 'react';
import Logo from './Logo';
import NavigationIcon from './NavigationIcon';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import PartnerLogos from './PartnerLogos';

const HeroSection: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col items-center pt-8 pr-5 pb-32 pl-20 bg-slate-900 max-md:pb-24 max-md:pl-5">
      <nav className="flex flex-wrap gap-5 justify-between w-full max-w-[1548px] max-md:max-w-full">
        <Logo />
        <NavigationIcon />
      </nav>
      <main className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <LeftSection />
          <RightSection />
        </div>
      </main>
      <PartnerLogos />
    </header>
  );
};

export default HeroSection;

