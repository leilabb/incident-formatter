import { useState } from "react";

export default function Output({ formData }) {
  const [copied, setCopied] = useState(false);

  function copyNumber() {
    const formDataToCopy = `LOS ROJO ${formData.type} ${formData.gpon} -  ZONA ${formData.zone} ${formData.affected} CLIENTES AFECTADOS
${formData.affected} caídos desde: ${formData.dateTime},
Coordenadas: ${formData.coordinates}
Localizada en: ${formData.adress}
SN del cliente: ${formData.serialNumber}
Equipo:${formData.equipo}
`;

    navigator.clipboard.writeText(formDataToCopy);

    setCopied(true);
  }

  return (
    <div className="">
      <div className="border rounded-xl p-10 ">
        <h2>
          LOS ROJO <span className="font-bold">{formData.type}</span> -
          <span className="font-bold">{formData.gpon}{" "}</span>ZONA{" "}
          <span className="font-bold">{formData.zone}</span>
          {""} <span className="font-bold"> {formData.affected} </span>CLIENTES
          AFECTADOS
        </h2>

        <div>
                  <p>{formData.affected} caídos desde: {formData.dateTime}</p>
          <p>
            Coordenadas: {formData.coordinates}          </p>
          <p>Localizada en: {formData.adress}</p>
          <p>SN del cliente: {formData.serialNumber}</p>
          <p>Equipo: {formData.equipo}</p>
   
        </div>
      </div>
      <button
        id="format-btn"
        className={`${
          copied ? "bg-green-600" : "bg-black"
        } mt-2 w-1/4 text-white font-medium py-3 px-4 rounded-md`}
        onClick={() => !copied && copyNumber()}
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
