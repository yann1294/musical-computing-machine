"use client";

import React from "react";
import { useState } from "react";

import Image from "next/image";

const ContactPage = () => {
  return (
    <div
      className="mx-24 mt-64 min-h-screen bg-cover text-center text-black"
      style={{ backgroundImage: "url('./motif_background.png')" }}
    >
      <h1 className="text-pretty text-5xl  font-bold  py-20">
        Association Palmier
      </h1>
      <div
        className="text-2xl"
        style={{
          fontFamily: "'Swanky and Moo Moo', cursive",
          lineHeight: "1.3",
        }}
      >
        <p>Chemin des Coudriers 21 / 1218 Le Grand - Saconnex</p>
        <p>
          Contact : Thomas Seki :<i>07621489473</i>
        </p>
        <p>Email: palmier.ge@gmail.com </p>
        <p>
          Site web :
          <a href="www.association-palmier.ch" className="text-green-500">
            <span> </span>www.association-palmier.ch
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
