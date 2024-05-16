"use client";

import Navbar from "@/Components/Navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import "./register.scss";

import twitter from "../../assets/images/twitter.svg";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import email_ico from "../../assets/images/email.svg";
import pass_ico from "../../assets/images/pass.svg";
import Footer from "@/Components/Footer/Footer";

import user_ico from "../../assets/images/user.svg";
import flag_ico from "../../assets/images/flag.svg";
import phone_ico from "../../assets/images/phone.svg";

import error from "../../assets/images/error.svg";
import success from "../../assets/images/success.svg";
import axios from "axios";
import { useCookies } from "next-client-cookies";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [username, setUser] = useState("");
  const [phone_number, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const [valid, setValid] = useState(0);
  const [msg, setMsg] = useState("");
  const cookies = useCookies();

  if (cookies.get("token") != undefined) {
    window.location.href = "/";
  }

  async function register() {
    if (
      email !== "" &&
      password !== "" &&
      username !== "" &&
      phone_number !== "" &&
      country !== ""
    ) {
      const data = JSON.stringify({
        email: email,
        username: username,
        password: password,
        country: country,
        phone_number: phone_number,
      });
      const res = await axios
        .post("http://localhost:4000/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success == false) {
            setValid(1);
            setMsg(res.data.message);
          } else {
            setValid(2);
          }
        });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login">
          <h1>Creează-ți propriul cont</h1>
          <p id="text">
            De ce mai aștepți ? Completează datele și pornește în aventura ta !
            Poți folosi următoarele
          </p>
          <div className="login_alt">
            <Image src={google} alt="google" />
            <Image src={twitter} alt="twitter" />
            <Image src={facebook} alt="facebook" />
          </div>
          <div className="delimitator">
            <hr></hr>
            <p>SAU</p>
            <hr></hr>
          </div>

          {(() => {
            if (valid === 1)
              return (
                <div className="notify error">
                  <Image src={error} width={32} height={32} alt="erorr" />
                  <span>{msg}</span>
                </div>
              );
            else if (valid === 2)
              return (
                <div className="notify success">
                  <Image src={success} width={32} height={32} alt="erorr" />
                  <span>Autentificare realizata cu succes !</span>
                </div>
              );
          })()}

          <div className="email can">
            <Image src={email_ico} alt="email" />
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            ></input>
          </div>
          <div className="username can">
            <Image src={user_ico} alt="user" />
            <input
              placeholder="Utilizator"
              onChange={(e) => setUser(e.target.value)}
              maxLength={20}
            ></input>
          </div>
          <div className="pass can">
            <Image src={pass_ico} alt="pass" />
            <input
              placeholder="Parolă"
              onChange={(e) => setPass(e.target.value)}
              maxLength={16}
              type="password"
            ></input>
          </div>
          <div className="d">
            <div className="telefon can">
              <Image src={phone_ico} alt="tel" />
              <input
                placeholder="Telefon (0745...)"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="tara can">
              <Image src={flag_ico} alt="tara" />
              <input
                placeholder="Țară"
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            onClick={() => {
              register();
            }}
          >
            Înregistrează
          </button>
        </div>
        <div className="redirect">
          <h1>Ai deja cont ?</h1>
          <p>Autentifică-te și arată-ne ce poți !</p>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Autentifică
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
