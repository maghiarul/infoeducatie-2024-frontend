import React from "react";
import Image from "next/image";

import "./pricing.scss";

import check from "../../assets/images/check.svg";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <h1 className="al">Alege planul potrivit nevoilor tale !</h1>
        <div className="cards">
          <div className="card">
            <h1>Basic</h1>
            <p className="price">
              <span className="dol">$</span>
              <span className="val">0</span>
              <span className="luna">/lună</span>
            </p>
            <hr></hr>
            <div className="avantaje">
              <p>Profita de: </p>
              <br></br>
              <p>
                <Image src={check} alt="check" /> Acces gratuit la lectii
              </p>
              <p>
                <Image src={check} alt="check" /> Suport pentru începători
              </p>
              <p>
                <Image src={check} alt="check" /> Actualizări periodice
              </p>
            </div>
            <button>Începe acum !</button>
          </div>
          <div className="card">
            <h1>Enterprise</h1>
            <p className="price">
              <span className="dol">$</span>
              <span className="val">12</span>
              <span className="luna">/lună</span>
            </p>
            <hr></hr>
            <div className="avantaje">
              <p>Profiti de planul Basic plus: </p>
              <br></br>
              <p>
                <Image src={check} alt="check" /> Funcționalități extinse
              </p>
              <p>
                <Image src={check} alt="check" /> Securitate și conformitate
                îmbunătățite
              </p>
              <p>
                <Image src={check} alt="check" /> Suport dedicat și personalizat
              </p>
            </div>
            <button>Începe acum !</button>
          </div>
          <div className="card">
            <h1>Premium</h1>
            <p className="price">
              <span className="dol">$</span>
              <span className="val">48</span>
              <span className="luna">/lună</span>
            </p>
            <hr></hr>
            <div className="avantaje">
              <p>Profiti de planul Enterprise plus: </p>
              <br></br>
              <p>
                <Image src={check} alt="check" /> Acces la caracteristici
                exclusive
              </p>
              <p>
                <Image src={check} alt="check" /> Suport prioritar
              </p>
              <p>
                <Image src={check} alt="check" />
                Colaborări proiecte
              </p>
            </div>
            <button>Începe acum !</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
