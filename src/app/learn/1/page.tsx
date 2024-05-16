"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./index.scss";
import Image from "next/image";

import book from "../../../assets/images/book.svg";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
import { useState, useCallback } from "react";

function Page() {
  const [value, setValue] = useState("console.log('hello world!');");
  const [terminalOutput, setTerminalOutput] = useState("");
  const [valid, setValid] = useState(false);

  function CodeEditor() {
    const onChange = useCallback(
      (val: React.SetStateAction<string>, viewUpdate: any) => {
        setValue(val);
      },
      []
    );
    return (
      <CodeMirror
        value={value}
        height="50vh"
        onChange={onChange}
        theme={xcodeDark}
        extensions={[javascript({ jsx: true })]}
      />
    );
  }

  function runCode(code: string) {
    try {
      // Store the original console.log
      const temp = console.log;
      // Create an array to hold the logs
      const logs: string[] = [];
      // Overwrite the console.log to store the logs
      console.log = (...args) => {
        logs.push(args.join(" "));
      };
      // Execute the code
      eval(code);
      // Revert to original console.log
      console.log = temp;
      // Get the logs
      const test = document.getElementById("test");
      if (test) {
        test.innerHTML = "";
        logs.forEach((log) => {
          const p = document.createElement("p");
          p.textContent = log;
          test.appendChild(p);
        });
      }
      if (logs[0] === "10") {
        setValid(true);
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("Error executing code:", error);

      const test = document.getElementById("test");
      if (test) {
        test.innerHTML = `Error: ${error}`;
      }
    }
  }

  return (
    <div className="container">
      <div className="main">
        <div className="learn">
          <Image src={book} alt="book" />
          <h1>Învață</h1>
        </div>
        <div className="padd">
          <p className="intr">Introducere JAVASCRIPT</p>
          <h1>Consola</h1>
          <p className="time">5 min</p>
          <div className="content">
            <p>
              Consola este un panou care afișează mesaje importante, cum ar fi
              erori, pentru programatori. O mare parte din munca pe care o face
              computerul cu codul nostru este invizibilă pentru noi în mod
              implicit. Dacă vrem să vedem lucruri care apar pe ecranul nostru,
              le putem afișa sau ne putem conecta direct la consola noastră.
            </p>
            <p>
              În JavaScript, cuvântul cheie "console" se referă la un obiect, o
              colecție de date și acțiuni, pe care le putem folosi în codul
              nostru. Cuvintele cheie sunt cuvinte care sunt încorporate în
              limbajul JavaScript, astfel încât computerul le recunoaște și le
              tratează în mod special.
            </p>
            <p>
              O acțiune sau metodă care este încorporată în obiectul consolă
              este metoda .log(). Când scriem "console.log()" ceea ce punem
              înăuntru parantezele vor fi tipărite sau înregistrate pe consolă.
            </p>
            <p>
              Va fi foarte util pentru noi să afișăm valori pe consolă, astfel
              încât să putem vedea munca pe care o facem.
            </p>
            <span className="code">
              console.log("something") <br />
              console.log(123)
            </span>
            <p>
              Pentru a putea trece mai departe , afișează pe ecran numărul 10.
            </p>
          </div>
        </div>
      </div>
      <div className="terminals">
        <div className="code">
          {CodeEditor()}
          <button
            onClick={() => {
              runCode(value);
            }}
          >
            Rulează
          </button>
        </div>
        <div className="run">
          <div className="list" id="test">
            {terminalOutput}
          </div>
          <button disabled={!valid}>Următorul</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
