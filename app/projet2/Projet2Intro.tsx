"use client";

import React from "react";
import Image from "next/image";

const Projet1Intro = () => {
  const style_background = {
    backgroundImage: "url('/projets/projet1/projet1.1.png')",
    height: 500,
    width: "100%",
  };

  const style_progress_bar_prc = {
    left: "50%",
  };

  const style_progress_bar = {
    width: "50%",
  };

  const style_intro = {
    width: 400,
    height: 400,
  };

  return (
    <section className="mt-10 mx-24 mb-10 min-h-screen bg-cover">
      <div className="col-span-12 bg-cover bg-no-repeat" style={style_background}></div>
      <div className="col-span-12 px-4">
        <h2 className="mt-10 font-bold text-center text-3xl text-green-700/75" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
          Gestion des déchets ménagers au Bénin
        </h2>
        <p className="mt-7">
          Grâce au soutien de la ville de Genève, la commune de Plan-les-Ouates, la commune de Meyrin et la commune de Parakou,
          le collectif des Associations de Ramassage des ordures ménagères de Parakou (CCAROM) Parakou a organisé des activités
          de sensibilisation, formation et séance d’information des chefs coutumiers :
        </p>
        <p className="mb-5">
          <span><b>
            "Soutien au Plan de la gestion des déchets ménagers dans la ville de Parakou au Bénin.
            Appui au collectif des associations de ramassage des ordures et sensibilisation de la population."
          </b></span>
        </p>
        <div className="relative flex w-full h-2.5 overflow-hidden rounded-3xl bg-gray-100">
          <div
            role="progressbar"
            aria-valuenow={50}  // Changed to number
            aria-valuemin={0}   // Changed to number
            aria-valuemax={100} // Changed to number
            style={style_progress_bar}
            className="bg-green-500"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projet1Intro;
