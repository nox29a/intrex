import React from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="About" className="grid text-center ml-[500px] py-16 w-[800px]">
      <div className="text-left">
        <div className="text-gray-400 uppercase">Dlaczego warto?</div>
        <div className="text-2xl text-black p-3 leading-10">
          Odpowiadamy{" "}
          <span className="py-2 text-white px-2 rounded-2xl bg-red-600">
            na wszystkie
          </span>
          <br /> potrzeby małych i średnich firm oraz korporacji.
        </div>
        <div className="flex ">
          <div className="w-1/2">
            <div className="grid gap-2">
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Doświadczenie</div>
                </div>
                <div className="font-xs ml-14">
                  Funkcjonujemy na rynku od 1992 roku, obsługując klientów
                  każdego rozmiaru na całym świecie.
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Zespół</div>
                </div>
                <div className="font-xs ml-14">
                  Zatrudniamy ponad 150 specjalistów oraz inżynierów, którzy na co dzień dbają o najwyższą jakość naszych produktów i usług.
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Doświadczenie</div>
                </div>
                <div className="font-xs ml-14">
                  Funkcjonujemy na rynku od 1992 roku, obsługując klientów
                  każdego rozmiaru na całym świecie.
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="grid gap-2">
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Sieć serwisowa</div>
                </div>
                <div className="font-xs ml-14">
                Dysponujemy rozbudowanym centrum serwisowym. Cokolwiek przydarzy się na linii produkcyjnej, interweniujemy ekspresowo w całej polsce oraz poza granicami kraju.
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Doświadczenie</div>
                </div>
                <div className="font-xs ml-14">
                  Funkcjonujemy na rynku od 1992 roku, obsługując klientów
                  każdego rozmiaru na całym świecie.
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="text-red-600">
                    <BsFillCheckCircleFill className="text-3xl ml-2"></BsFillCheckCircleFill>
                  </div>
                  <div className="m-1 ml-5 font-semibold">Doświadczenie</div>
                </div>
                <div className="font-xs ml-14">
                  Funkcjonujemy na rynku od 1992 roku, obsługując klientów
                  każdego rozmiaru na całym świecie.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
