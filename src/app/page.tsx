"use client";

import Image from "next/image";
import logo from "../assets/images/logo.svg";
import logo_white from "../assets/images/logo-white.svg";
import "./home.scss";
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import recenzie1 from "../assets/images/recenzie1.png";
import recenzie2 from "../assets/images/recenzie2.jpg";
import arrow_right from "../assets/images/arrow-right.svg";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <div className="SLIDE FIRST">
        <Navbar />
        <div className="heading">
          <h1>Învață. Testează. Progresează.</h1>
          <p>
            Prime Tech este platforma intuitivă și ușor de utilizat pentru
            persoanele care doresc să învețe un limbaj de programare într-un
            mediu interactiv.
          </p>
          <div className="butoane">
            <a href="" id="unu">
              Începeți acum
            </a>
            <a href="" id="doi">
              Înțelege cum funcționează
            </a>
          </div>
        </div>
      </div>
      <div className="SLIDE SECOND">
        <p>Cum funcționează</p>
        <h1>
          La început , orice utilizator va urmări primele cursuri care vor
          consta în algoritmi fundamentali și adaptarea unui mod de gândire
          adecvat,
        </h1>
        <h2>
          ca mai apoi să aplice noțiunile învățate într-unul dintre terminalele
          noastre.
        </h2>
        <div className="exemple">
          <Image src={img1} alt="img1" />
          <Image src={img2} alt="img1" />
        </div>
      </div>
      <div className="SLIDE THIRD">
        <p id="t">Recenzii</p>
        <h1>Alătură-te unei comunități plină de oportunități și activități.</h1>
        <div className="recenzii">
          <div className="recenzie">
            <p className="recenzie_text">
              “Am fost plăcut surprins să văd cât de mult am putut avansa în
              acest domeniu. Bănuiesc că am avut nevoie de un învățător bun,
              mersi Prime Tech ! “
            </p>
            <div className="user_recenzie">
              <Image src={recenzie1} alt="recenzie1" />
              <div className="text">
                <h3>Alina</h3>
                <p>Student</p>
              </div>
            </div>
          </div>
          <div className="recenzie">
            <p className="recenzie_text">
              “Sunt extrem de încântat de progresul meu în domeniul acesta și nu
              m-aș fi gândit că pot atinge acest nivel într-un timp atât de
              scurt. Cred că acest lucru se datorează în mare parte efortului
              meu, dar și ghidării și suportului continuu oferit de către echipa
              Prime Tech“
            </p>
            <div className="user_recenzie">
              <Image src={recenzie2} alt="recenzie2"/>
              <div className="text">
                <h3>Mihai</h3>
                <p>Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SLIDE FOURTH">
        <h1>
          Oportunitățile sunt la un click distanță ! Vă invităm să vă alăturați
          comunității noastre și să explorați platforma noastră gratuită.
        </h1>
        <a href="">
          Incepeti acum <Image src={arrow_right} alt="lol" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
