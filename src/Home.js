// Importing necessary components
import React from "react";
import SearchBar from "./Search";
import CarouselPage from "./Carousel";
import Models from "./Models";
import Footer from './Footer';
import TestimonialCarousel from './Testimonial';
import Map from "./Map";

// Main Home component
function Home() {
  return (
    <div>
      <SearchBar />
      <CarouselPage />
      <Models />
      <TestimonialCarousel />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
