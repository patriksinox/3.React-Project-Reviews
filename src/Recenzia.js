import recenzie from "./data.js";
import React from "react";
import { useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

function Recenzia() {
  const [osoba, setOsoba] = useState(0);
  const { name, job, image, text } = recenzie[osoba];

  const kontrola = (cislo) => {
    if (cislo > recenzie.length - 1) {
      return 0;
    }
    if (cislo < 0) {
      return recenzie.length - 1;
    }
    return cislo;
  };

  const doprava = () => {
    setOsoba((osoba) => {
      let novaOsoba = osoba + 1;
      return kontrola(novaOsoba);
    });
  };

  const dolava = () => {
    setOsoba((osoba) => {
      let novaOsoba = osoba - 1;
      return kontrola(novaOsoba);
    });
  };

  const random = () => {
    let nahodne = Math.floor(Math.random() * recenzie.length);
    if (nahodne === osoba) {
      nahodne = osoba + 1;
    }
    setOsoba(kontrola(nahodne));
  };

  return (
    <>
      <article>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <h5>{name}</h5>
        <span className="praca">{job}</span>
        <p>{text}</p>
        <div>
          <button className="ikonka" onClick={() => dolava()}>
            <FcPrevious />
          </button>
          <button className="ikonka" onClick={() => doprava()}>
            <FcNext />
          </button>
        </div>
        <button className="nahodne" onClick={() => random()}>
          Náhodná recenzia
        </button>
      </article>
    </>
  );
}

export default Recenzia;
