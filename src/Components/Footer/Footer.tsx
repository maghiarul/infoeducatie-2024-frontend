import React from "react";
import Image from "next/image";
import "./footer.scss";

import logo_white from "../../assets/images/logo-white.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="main-container">
        <div className="follow col">
          <h1>Urmăriți-ne</h1>
          <a href="">Twitter</a>
          <a href="">LinkedIn</a>
          <a href="">Github</a>
          <a href="">Youtube</a>
          <a href="">Facebook</a>
          <a href="">Discord</a>
        </div>
        <div className="resurse col">
          <h1 id="resurse">Resurse</h1>
          <a href="/#t">Recenziile clienților</a>
          <a href="/templates">Șabloane</a>
          <a href="/docs">Documentație</a>
          <a href="/tutorial">Tutoriale</a>
        </div>
        <div className="despre col">
          <h1>Despre</h1>
          <a href="/about">Despre noi</a>
          <a href="/report">Raportați abuzul</a>
          <a href="/contact">Contactați-ne</a>
        </div>
      </div>
      <div className="copyright">
        <Image src={logo_white} alt="LOGO" />
        <hr></hr>
        <p>Copyright © Prime Tech - 2024</p>
      </div>
    </div>
  );
}

export default Footer;
