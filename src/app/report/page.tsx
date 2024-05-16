"use client";

import React, { useState } from "react";
import "./report.scss";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import email_ico from "../../assets/images/email.svg";
import name_ico from "../../assets/images/name.svg";
import topic_ico from "../../assets/images/topic.svg";
import text_ico from "../../assets/images/text.svg";
import axios from "axios";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");

  async function sendEmail() {
    const data = JSON.stringify({
      name: name,
      email: email,
      topic: topic,
      text: text,
    });

    const res = await axios
      .post("http://localhost:4000/send-mail", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        window.alert(res.data);
      });
  }
  return (
    <div className="l">
      <Navbar />
      <div className="container">
        <h1>Raportează abuzul.</h1>
        <p>
          Dacă întâmpinați probleme sau aveți suspiciuni cu privire la site-ul
          nostru (spam, malware, phishing etc.), vă rugăm să ne anunțați imediat
          !
        </p>
        <div className="contact">
          <div className="f">
            <div className="nume can">
              <Image src={name_ico} alt="name" />
              <input
                placeholder="Nume & Prenume"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="email can">
              <Image src={email_ico} alt="email" />

              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="topic can">
            <Image src={topic_ico} alt="topic" />

            <input
              placeholder="Topic"
              onChange={(e) => setTopic(e.target.value)}
            ></input>
          </div>
          <div className="text can">
            <Image src={text_ico} alt="text" />
            <textarea
              onChange={(e) => setText(e.target.value)}
              placeholder="Scrieți ce este în neregulă cu site-ul."
            ></textarea>
          </div>
        </div>
        <button
          onClick={() => {
            sendEmail();
          }}
        >
          Trimite !
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
