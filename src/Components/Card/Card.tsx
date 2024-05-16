"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  text: string;
  link: string;
  autor: string;
  desc: string;
  imageUrl?: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ text, link, autor, desc, imageUrl }) => {
  return (
    <div className="card">
      <p className="text">{text}</p>
      {imageUrl && <Image src={imageUrl} alt="lol" width={350}/>}
      <p className="desc">{desc}</p>
      <p className="autor">Postat de - {autor}</p>
      <a href={link}>Vezi</a>
    </div>
  );
};

export default Card;
