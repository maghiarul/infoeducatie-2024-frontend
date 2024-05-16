"use client";

import Navbar from "@/Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./login.scss";

import twitter from "../../assets/images/twitter.svg";
import google from "../../assets/images/google.svg";
import facebook from "../../assets/images/facebook.svg";
import email_ico from "../../assets/images/email.svg";
import pass_ico from "../../assets/images/pass.svg";
import Footer from "@/Components/Footer/Footer";

import error from "../../assets/images/error.svg";
import success from "../../assets/images/success.svg";
import axios from "axios";
import { useCookies } from "next-client-cookies";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [valid, setValid] = useState(0);
  const [msg, setMsg] = useState("");
  const cookies = useCookies();

  if (cookies.get("token") != undefined) {
    window.location.href = "/";
  }

  async function login() {
    if (email !== "" && password !== "") {
      const data = JSON.stringify({
        email: email,
        password: password,
      });
      const res = await axios
        .post("http://localhost:4000/login", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success == false) {
            setValid(1);
            setMsg(res.data.message);
          } else {
            setValid(2);
            cookies.set("token", res.data.token);
          }
        });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login">
          <h1>Conectează-te la contul tău</h1>
          <p>Intră în contul tău folosind următoarele</p>
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
            else if (valid === 2) {
              setTimeout(() => {
                window.location.href = "/";
              }, 3000);
              return (
                <div className="notify success">
                  <Image src={success} width={32} height={32} alt="erorr" />
                  <span>Autentificare realizata cu succes !</span>
                </div>
              );
            }
          })()}

          <div className="username can">
            <Image src={email_ico} alt="email" />
            <input
              placeholder="Email / Utilizator"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="pass can">
            <Image src={pass_ico} alt="pass" />
            <input
              placeholder="Parolă"
              type="password"
              maxLength={16}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <button
            onClick={() => {
              login();
            }}
          >
            Autentifică
          </button>
        </div>
        <div className="redirect">
          <h1>Prima dată?</h1>
          <p>Înscrie-te și descoperă ce are Prime Tech de oferit !</p>
          <button
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Înregistrează
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
