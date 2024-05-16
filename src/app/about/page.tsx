import React from "react";
import "./about.scss";
import Navbar from "@/Components/Navbar/Navbar";

import ts from "../../assets/images/ts.svg";
import js from "../../assets/images/js.svg";
import sass from "../../assets/images/sass.svg";
import Image from "next/image";

import git from "../../assets/images/git.svg";
import Footer from "@/Components/Footer/Footer";

function Page() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="text">
          <h1>
            Suntem într-o misiune de a cultiva talentele care vin din spatele
            nostru.
          </h1>
          <p>
            Ne vedem aplicația de învățare a limbajului de programare ca fiind
            într-o misiune continuă de a cultiva talentele ce stau în spatele
            nostru. Viziunea noastră pentru viitor este să transformăm această
            platformă într-un mediu dinamic , unde fiecare utilizator poate
            explora și dezvolta pasiunile și abilitățile lor în programare.
          </p>
          <br></br>
          <p>
            Ne dorim să creăm un ecosistem în care nu doar se învață limbaje de
            programare , ci se dezvoltă și se încurajează creativitatea ,
            inovația și spiritul colaborativ , oferind astfel oportunități
            nelimitate pentru cei ce aspiră să devină profesioniști în domeniu.
          </p>
        </div>
        <div className="stuff">
          <div className="tech">
            <Image src={ts} alt="ts" />
            <Image src={js} alt="js" />
            <Image src={sass} alt="sass" />
          </div>
          <div className="text">
            <p>
              Ecosistemul proiectului Prime Tech a fost meticulos creat și
              îmbunătățit prin utilizarea{" "}
              <strong>TypeScript, JavaScript și SCSS</strong>. Aceste tehnologii
              au fost alese cu grijă pentru a asigura o bază solidă și flexibilă
              aplicației noastre.
            </p>
          </div>
        </div>
      </div>
      <div className="secondary">
        <div className="text">
          <h1>De ce open source?</h1>
          <p>
            Adoptând un model de dezvoltare open source, ne angajăm să oferim
            transparență și accesibilitate maximă, permițând comunității să
            contribuie la îmbunătățirea continuă a platformei noastre.{" "}
          </p>
          <br></br>
          <p>
            Aceasta nu numai că crește rapiditatea și calitatea dezvoltării, ci
            și promovează un spirit de colaborare și învățare reciproce între
            dezvoltatori de diferite niveluri de experiență.{" "}
          </p>
        </div>
        <div className="stuff">
          <div className="tech">
            <Image src={git} alt="git" />
          </div>
          <div className="text">
            <p>
              Simțiți-vă liberi să utilizați, partajați, îmbunătățiți și să
              contribuiți la codul nostru.
            </p>
          </div>
          <div className="buttons">
            <a
              target="_blank"
              href="https://github.com/maghiarul/infoeducatie-2024-backend"
            >
              ./backend
            </a>
            <a
              target="_blank"
              href="https://github.com/maghiarul/infoeducatie-2024-frontend"
            >
              ./frontend
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
