import React, { useState } from "react";

const Partnership = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleDivClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div id="Partnership" className="mx-32 mb-10">
      <div className="text-left">
        <div className="text-gray-400 uppercase">WSPÓŁPRACA</div>
        <div className="text-2xl text-black">
          Nasi partnerzy{" "}
          <span className="py-2 text-white px-2 rounded-2xl bg-red-600">
            o nas
          </span>
        </div>
        <div className="flex w-full my-4">
          <div className="border rounded w-2/5 p-4 text-sm h-fit">
            <div
              className={selectedId === "domino" ? "" : "hidden"}
            >
              <div>
                Współpracujemy z firmą Intrex od początku lat 90tych, to bardzo
                solidny dystrybutor urządzeń do znakowania, ale także producent
                oraz dostawca komponentów dla Domino. Intrex od zawsze imponował
                bardzo dużym zaangażowaniem i niezwykle profesjonalnym
                podejściem w relacjach z klientami. Wsparcie techniczne i serwis
                szczególnie zasługują na największe uznanie. Mamy nadzieję, że
                nasza współpraca będzie dalej rozwijana i kontynuowana przez
                lata.
              </div>
              <div className="font-semibold pt-3">
                Tim Chapman B.Sc. Business Development Manager (C&E.Europe)
              </div>
            </div>
            <div
              className={selectedId === "sic" ? "" : "hidden"}
            >
              <div>
                asdasdasdasdasdasdnia, ale także producent oraz dostawca
                komponentów dla Domino. Intrex od zawsze imponował bardzo dużym
                zaangażowaniem i niezwykle profesjonalnym podejściem w relacjach
                z klientami. Wsparcie techniczne i serwis szczególnie zasługują
                na największe uznanie. Mamy nadzieję, że nasza współpraca będzie
                dalej rozwijana i kontynuowana przez lata.
              </div>
              <div className="font-semibold pt-3">
                asdasdasdasdasdsfasfasfasdasdasdaager (C&E.Europe)
              </div>
            </div>
          </div>
          <div className="w-3/5 mx-10 justify-center flex flex-wrap gap-6 ">
            <div
              onClick={() => handleDivClick("domino")}
              className={`w-1/4 p-3 rounded-xl border h-20 flex justify-center items-center hover:scale-110 shadow-xl transform transition duration-500 ${
                selectedId === "domino" ? "border-red-600" : ""
              }`}
            >
              <img src="https://intrex.pl/wp-content/uploads/2023/03/Projekt-bez-tytulu-17.png" alt="Domino"></img>
            </div>
            <div
              onClick={() => handleDivClick("sic")}
              className={`w-1/4 p-3 rounded-xl border h-20 flex justify-center items-center hover:scale-110 shadow-xl transform transition duration-500 ${
                selectedId === "sic" ? "border-red-600" : ""
              }`}
            >
              <img src="https://intrex.pl/wp-content/uploads/2023/03/Projekt-bez-tytulu-17.png" alt="SIC"></img>
            </div>
            {/* Dodaj kolejne divy i obsługę ich kliknięć w podobny sposób */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;