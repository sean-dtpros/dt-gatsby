import React from "react";
import Hero from "../sections/home/Hero";
import FingerprintSpinner from "../components/FingerprintSpinner";
import Clients from "../sections/home/Clients";
import Feature from "../sections/home/Feature";
import Feature2 from "../sections/home/Feature2";
import Content1 from "../sections/home/Content1";
import Testimonial from "../sections/home/Testimonial";
import CTA from "../sections/home/CTA";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <FingerprintSpinner />
        <Clients />
        <Feature />
        <Feature2 />
        <Content1 />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
