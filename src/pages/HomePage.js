import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";
import Chicago from "../components/Chicago";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}
