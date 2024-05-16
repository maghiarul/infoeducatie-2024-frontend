import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

import "./tutorial.scss";
import Card from "@/Components/Card/Card";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Tutoriale</h1>
        <div className="items">
          <Card
            text="How to center a div"
            link="https://www.joshwcomeau.com/css/center-a-div/"
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
