"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./navbar.scss";

import logo from "../../assets/images/logo.svg";
import { useCookies } from "next-client-cookies";
import axios from "axios";

function Navbar() {
  const cookies = useCookies();
  const [display, setDisplay] = useState("");

  async function logout() {
    try {
      const data = JSON.stringify({
        token: cookies.get("token"),
      });
      const res = await axios.post("http://localhost:4000/logout", data, {
        headers: { "Content-Type": "application/json" },
      });
      cookies.remove("token");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  useEffect(() => {
    if (cookies.get("token") != undefined) {
      const data = JSON.stringify({
        token: cookies.get("token"),
      });
      const res = axios
        .post("http://localhost:4000/getDisplay", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setDisplay(res.data.email);
        });
    }
  }, []);

  return (
    <div className="navbar">
      <a className="logo" href="/">
        <Image src={logo} width={264} height={100} alt="LOGO" />
      </a>
      <div className="items">
        {/* <a href="/login" id="auth">
          Autentificare
        </a>
        <a href="/register" id="incepe">
          Începe gratuit
        </a> */}

        {(() => {
          if (display === "")
            return (
              <>
                <a href="#resurse">Resurse</a>

                <a href="/pricing">Plată</a>

                <a href="/login" id="auth">
                  Autentificare
                </a>
                <a href="/register" className="incepe">
                  Începe gratuit
                </a>
              </>
            );
          else
            return (
              <>
                <a href="/learn" className="incepe">
                  Învață
                </a>
                <a>{display}</a>
                <button
                  onClick={() => {
                    logout().then(() => {
                      window.location.href = "/";
                    });
                  }}
                >
                  Log out
                </button>
              </>
            );
        })()}
      </div>
    </div>
  );
}

export default Navbar;
