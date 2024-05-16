"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

import "./learn.scss";
import Card from "@/Components/Card/Card";

import introducere from "../../assets/images/js.jpeg";
import { useCookies } from "next-client-cookies";

function Page() {
  const cookies = useCookies();

  if (cookies.get("token") == undefined) {
    window.location.href = "/";
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Lecții</h1>
        <div className="items">
          <Card
            text="1. Introducere"
            link="/learn/1"
            autor="Admin"
            imageUrl={introducere}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia mollis varius. Ut fermentum turpis quis nunc lobortis gravida."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
