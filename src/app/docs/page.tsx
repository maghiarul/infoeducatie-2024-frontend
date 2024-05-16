import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

import "./docs.scss";
import Card from "@/Components/Card/Card";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Documentație</h1>
        <div className="items">
          <Card
            text="HTML"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            autor="Admin"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mollis varius. Ut fermentum turpis quis nunc lobortis gravida."
          />
          <Card
            text="Javascript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            autor="Admin"
            desc="Aliquam interdum sodales mattis. Morbi viverra finibus ex eget maximus. Aenean suscipit orci eu."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
