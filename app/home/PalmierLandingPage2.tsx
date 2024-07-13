"use client"

import React, { useState } from "react";
import Image from "next/image";

const PalmierLandingPage2 = () => { 
    
    
return(
    <section className=" bg-cover h-screen " style={{ backgroundImage: "url('/motif_background.png')" }}>
        <div className=" px-20   " style={{ backgroundImage: "url('/Rectangle585.png')" }}>
            <div style={{ maxWidth: '1200px' }}>
                <Image                   
                    className="hidden sm:block"
                    src="/MEREEE.png"
                    layout="responsive"  
                    width={1000}
                    height={10}
                    alt="Bonne maman"

                />
            </div>
        </div>
        <div className=" mt-2.5  flex justify-center items-center ">
            <h2 className=" text-5xl text-justify font-bold text-black" style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}>
               Ensemble 
            </h2>        
        </div>
        <div className="px-6 mt-6 bg-[#EDEDCB]/70 border border-transparent ring ring-blur ring-white">
    <div className="flex justify-center items-center bg-white px-1 py-1 mt-4 mx-auto rounded-full border-[6px] w-full max-w-[994px] border-[#B9DEC3]">
        <div className="flex justify-center items-center px-2 py-14 rounded-full bg-[#B9DEC3] w-full">
            <p className="text-black text-xl sm:text-3xl lg:text-4xl text-center">
                Soutenons des projets innovants en Afrique, améliorons les conditions de vie des populations locales en préservant et en régénérant les écosystèmes.
            </p>
        </div>
    </div>
    <div className="flex justify-center items-center bg-white px-1 py-1 mt-3 mx-auto rounded-full border-[6px] w-full max-w-[994px] border-[#B9DEC3]">
        <div className="flex justify-center items-center px-2 py-14 rounded-full bg-[#B9DEC3] w-full">
            <p className="text-black text-xl sm:text-3xl lg:text-4xl text-center">
                Créons des projets de développement innovants, façonnons l’avenir et inspirons le changement positif pour un impact durable en Afrique.
            </p>
        </div>
    </div>
    <div className="flex justify-center items-center bg-white px-1 py-1 mt-3 mx-auto rounded-full border-[6px] w-full max-w-[994px] border-[#B9DEC3] mb-8">
        <div className="flex justify-center items-center px-2 py-14 rounded-full bg-[#B9DEC3] w-full">
            <p className="text-black text-xl px-2 pt-1 sm:text-3xl lg:text-4xl text-center">
                Engageons à promouvoir la transparence tout en favorisant des partenariats solides et inclusifs.
            </p>
        </div>
    </div>
</div>


    </section>
);
};

export default PalmierLandingPage2;
