"use client";

import React, { useState } from "react";
import Link from "next/link";

import Dropdown from "@/components/Dropdown";
import ProjectsByDate from "../projects_by_date/ProjectsByDate";
import ProjetsCongo from "../projects_by_country/ProjetsCongo";
import ProjetsSuisse from "../projects_by_country/ProjetsSuisse";
import ProjetsBenin from "../projects_by_country/ProjetsBenin";

import Image from "next/image";
import Projets2016 from "../projects_by_date/Projets2016";
import Projets2017 from "../projects_by_date/Projets2017";
import Projets2018 from "../projects_by_date/Projets2018";

const ProjetListe = () => {
  const [getSelectedValue, setGetSelectedValue] = useState("tous");

  const getSelectedValueFromChild = (value: any) => {
    setGetSelectedValue(value);
  };

  let projetToShow: any;

  if (getSelectedValue === "congo") {
    projetToShow = <ProjetsCongo />;
  } else if (getSelectedValue === "benin") {
    projetToShow = <ProjetsBenin />;
  } else if (getSelectedValue === "suisse") {
    projetToShow = <ProjetsSuisse />;
  } else if (getSelectedValue === "2016") {
    projetToShow = <Projets2016 />;
  } else if (getSelectedValue === "2017") {
    projetToShow = <Projets2017 />;
  } else if (getSelectedValue === "2018") {
    projetToShow = <Projets2018 />;
  } else {
    projetToShow = <ProjectsByDate />;
  }

  return (
    <>
      <Dropdown onSelectChange={getSelectedValueFromChild} />
      {projetToShow}
    </>

    /*
      <section className="mt-10  mx-24 grid grid-rows-6 grid-cols-12 min-h-screen bg-cover" style={{ backgroundImage: "url('./bckgd_Valeurs.png')", backgroundSize: "100% 100%" }}>
        <div className=" text-black text-lg row-end-1 col-end-2">
          <Dropdown/>
        </div>
        <div className=" row-start-1 row-end-2 col-start-4 col-span-5">
          <h2 className=" text-5xl text-center font-bold mb-8" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
            Nos Projets
          </h2>
          <p>Depuis 2016 Palmier compte dans son actif une vingtaine de projets réalisés.</p>
        </div>
        <div className=" row-start-2 row-span-4 col-start-2 col-span-10 ">
          <div className="flex justify-evenly py-14 mt-2 ">
            <div className="max-w-sm m-2 pb-4 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] " style={{ maxWidth: '300px' }}>
                <Link href="/projet1">
                <figure className="cursor-pointer ">
                  <div >
                    <Image
                      src="/fille_souriante1.png"
                      layout="responsive"
                      className="hover:scale-105 "
                      width={100}
                      height={1}
                      alt="projet phare"
                     />
                  </div>
                  <div className="  bg-amber-500 text-white text-center text-bold text-[17px] font-medium px-[8px] ml-4 mr-4 mt-4 pt-[5px] flex items-center ">
                    <p className="px-5">Gestion des déchets</p>
                  </div>
                </figure>
                <figcaption>
                  <div className=" mt-3 ml-2 text-center">
                    <p className="text-base text-gray-700 ">
                      Début : 2016
                    </p>
                    <p className="text-base text-gray-700 ">
                      Lieu : Parakou, Bénin
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Lire plus
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </figcaption>
                </Link>
            </div>
            <div className="max-w-sm m-2  rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] " style={{ maxWidth: '300px' }}>
              <Link href="/projet2">
                <figure className="cursor-pointer ">
                  <div>
                    <Image
                      src="/fille_souriante1.png"
                      layout="responsive"
                      className="hover:scale-105 "
                      width={100}
                      height={1}
                      alt="projet phare"
                     />
                  </div>
                  <div className="  bg-amber-500 text-white text-center text-bold text-[17px] font-medium px-[8px] ml-4 mr-4 mt-4 pt-[5px] flex items-center ">
                    <p className="px-5">Réfection des latrines</p>
                  </div>
                </figure>
                <figcaption>
                  <div className=" mt-3 ml-2 text-center">
                    <p className="text-base text-gray-700 ">
                      Début : 2017
                    </p>
                    <p className="text-base text-gray-700 ">
                      Lieu : Parakou, Bénin
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Lire plus
                    <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
                  </div>
                </figcaption>
              </Link>
            </div>
            <div className="max-w-sm m-2  rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] " style={{ maxWidth: '300px' }}>
              <Link href="/projet3">
                <figure className="cursor-pointer ">
                  <div>
                    <Image
                      src="/fille_souriante1.png"
                      layout="responsive"
                      className="hover:scale-105 "
                      width={100}
                      height={1}
                      alt="projet phare"
                     />
                  </div>
                  <div className="  bg-amber-500 text-white text-center text-bold text-[17px] font-medium px-[8px] ml-4 mr-4 mt-4 pt-[5px] flex items-center ">
                    <p className="px-5">Permanence scolaire  </p>
                  </div>
                </figure>
                <figcaption>
                  <div className=" mt-3 ml-2 text-center">
                    <p className="text-base text-gray-700 ">
                      Début : 2017
                    </p>
                    <p className="text-base text-gray-700 ">
                      Lieu : Vernier, Suisse
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Lire plus
                    <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
                  </div>
                </figcaption>
              </Link>
            </div>
            <div className="max-w-sm m-2  rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full shadow-lg bg-[#B9DEC3] " style={{ maxWidth: '300px' }}>
              <Link href="/projet4">
                <figure className="cursor-pointer ">
                  <div>
                    <Image
                      src="/fille_souriante1.png"
                      layout="responsive"
                      className="hover:scale-105 "
                      width={100}
                      height={1}
                      alt="projet phare"
                     />
                  </div>
                  <div className="  bg-amber-500 text-white text-center text-bold text-[17px] font-medium px-[8px] ml-4 mr-4 mt-4 pt-[5px] flex items-center ">
                    <p className="px-5">Réfection d’une école </p>
                  </div>
                </figure>
                <figcaption>
                  <div className=" mt-3 ml-2 text-center">
                    <p className="text-base text-gray-700 ">
                      Début : 2018
                    </p>
                    <p className="text-base text-gray-700 ">
                      Lieu : Nganda, Congo
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[6px] px-3 mt-3 mx-auto bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 text-white text-[14px] font-medium w-max">
                    Lire plus
                    <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
                  </div>
                </figcaption>
              </Link>
            </div>
          </div>
        </div>
        <div className="row-start-6 col-start-6">
          <div className="join ">
              <button className="bg-amber-500 hover:bg-amber-500 join-item btn btn-active">1</button>
              <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn ">2</button>
              <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn">3</button>
              <button className="bg-[rgba(248,184,100,0.8)] hover:bg-amber-500 join-item btn">4</button>
          </div>
        </div>
      </section> */
  );
};

export default ProjetListe;
