"use client";

import * as React from "react";
import { useState } from "react";

const Dropdown = ({ onSelectChange }: any) => {
  const [selectedValue, setSelectedValue] = useState("tous");

  // function getSelectedValue = () => {
  //   console.log(selectedValue);
  // }

  return (
    <div className="mt-10  mx-24">
      <select
        value={selectedValue}
        onChange={(e) => {
          onSelectChange(e.target.value);
          setSelectedValue(e.target.value);
        }}
        className=" rounded-3xl text-white font-semibold bg-amber-500 px-3 py-3 "
      >
        <option value="tous">Tous les projets</option>
        <option value="benin">Bénin</option>
        <option value="suisse">Suisse</option>
        <option value="congo">RD Congo</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
};

export default Dropdown;
