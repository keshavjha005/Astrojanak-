import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import BrandMarquees from "../components/BrandMarque";
import OurServices from "../components/Ourservices";
import Journey from "../components/Journey";
import WhyChooseUs from "../components/WhyChooseUs";
import CalculatorsSection from "../components/CalCulatorsSection";
import ConsultationSection from "../components/ConsultationSection";
import FeatureIconsSection from "../components/FeatureIconsSection";
import Testimonials from "../components/TestimonialSection";
import ZodiacSection from "../components/ZodiacSection";
import BlogCarousel from "../components/BlogSection";
import FAQAccordion from "../components/Faqs";
import ConsulationCallForm from "../components/ConsulationCallForm";

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <BrandMarquees />
      <OurServices />
      <Journey />
      <WhyChooseUs />
      <CalculatorsSection />
      {/* <ConsultationSection /> */}
      {/* <FeatureIconsSection /> */}
      <Testimonials />
      <ZodiacSection />
      <BlogCarousel />
      <FAQAccordion />
      <ConsulationCallForm />
    </>
  );
};

export default Home;
