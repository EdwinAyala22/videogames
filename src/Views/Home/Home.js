import React from "react";
import NavbarApp from "../../Components/Navbar/Index";
import CarouselApp from "../../Components/Carousel/Index";
import TextoApp from "../../Components/Texto/Index";
import CardsApp from "../../Components/Cards/Index";
import FooterApp from "../../Components/Footer/Index";
const HomeApp = () => {
  return (
    <div>
      <NavbarApp />
      <CarouselApp />
      <TextoApp />
      <CardsApp />
      <FooterApp />
    </div>
  );
};

export default HomeApp;
