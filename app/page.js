import React from "react";
import HeroSection from "./HeroSection/heroSection";
import Navbar from "./Components/Navbar/navbar";
import Policy from "./Components/Policy/policy";
import Product from "./Products/product";
import TeamSection from "./TeamSection/teamSection";
export const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Policy />
      <Product />
      <TeamSection />
    </>
  );
};

export default page;
