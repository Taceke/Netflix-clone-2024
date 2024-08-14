import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Header/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Rowlist from "../../components/Rows/Rowlist/Rowlist";

const home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
};

export default home;
