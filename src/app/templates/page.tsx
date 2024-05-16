import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

import "./templates.scss";
import Card from "@/Components/Card/Card";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Șabloane</h1>
        <div className="items">
          <Card
            text="Ice Cream Landing Page"
            link="https://www.figma.com/community/file/1370731701231294603/ice-cream-landing-page-website-ui-design-beginners-web-design-tutorial"
            autor="Admin"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mollis varius. Ut fermentum turpis quis nunc lobortis gravida."
          />
          <Card
            text="Ecommerce Website"
            link="https://www.figma.com/community/file/1370610603197764617"
            autor="Admin"
            desc="Aliquam interdum sodales mattis. Morbi viverra finibus ex eget maximus. Aenean suscipit orci eu."
          />
          <Card
            text="Agency Website"
            link="https://www.figma.com/community/file/1370940962239020307"
            autor="Admin"
            desc="Cras eget metus est. Pellentesque nunc turpis, vestibulum id mi ac, fringilla tempus lorem."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
