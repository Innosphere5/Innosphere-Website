import React from "react";
import HeroSection from "./HeroSection/heroSection";
import Navbar from "./Components/Navbar/navbar";
import Policy from "./Components/Policy/policy";
import Product from "./Products/product";
import TeamSection from "./TeamSection/teamSection";
import Footer from "./Components/Footer/footer";
import ClientWork from "./ClientWork/clientwork";
import Contact from "./ContactSection/contactSection"
import TestimonialSection from "./TestimonialSection/testimonialSection"
import Privacy from "./Privacy/privacy"

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with proper ID */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Policy/About Section with proper ID */}
      <section id="policy">
        <Policy />
      </section>

      {/* Products Section with proper ID */}
      <section id="products">
        <Product />
      </section>

      {/* Team Section with proper ID */}
      <section id="team">
        <TeamSection />
      </section>


      {/* Client Work Section with proper ID */}
      <section id="clientwork">
        <ClientWork />
      </section>
      <section id="contact">
      <Contact />
      </section>

      {/* Footer with Contact ID for the Contact button */}
      <section id="footer">
        <Footer />
      </section>

   
      
    </>
  );
};

export default Page;