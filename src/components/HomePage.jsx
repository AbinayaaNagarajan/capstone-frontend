import React from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';
import NewsSection from './NewsSection';
import AboutMe from './AboutMe'; // Import the AboutMe component

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with Static Slider and About Me */}
      <div className="main-content">
        

        {/* Static Slider */}
        <Slider />


        {/* News Section */}
        <NewsSection />
      </div>
    </div>
  );
};

export default HomePage;
