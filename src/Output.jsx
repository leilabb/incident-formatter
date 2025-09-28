import { useState } from "react";

export default function Output({ formData }) {
  const [copied, setCopied] = useState(false);

  function copyNumber() {
    const formDataToCopy = `LOS ROJO ${formData.type} ${formData.gpon} -  ZONA ${formData.zone} ${formData.affected} CLIENTES AFECTADOS
Puertos: ${formData.fsp.f} / ${formData.fsp.s} / ${formData.fsp.p}
Fecha y hora: ${formData.dateTime},
Coordenadas: ${formData.coordinates.x}, ${formData.coordinates.y}
Dirección: ${formData.adress}
SN: ${formData.serialNumber}
`;

    navigator.clipboard.writeText(formDataToCopy);

    setCopied(true);
  }

  return (
    <div className="">
      <div className="border rounded-xl p-10 ">
        <h2>
          LOS ROJO <span className="font-bold">{formData.type}</span> -
          <span className="font-bold">{formData.gpon} </span>ZONA{" "}
          <span className="font-bold">{formData.zone}</span>
          {""} <span className="font-bold"> {formData.affected} </span>CLIENTES
          AFECTADOS
        </h2>

        <div>
          <p>
            Puertos: {formData.fsp.f} / {formData.fsp.s} / {formData.fsp.p}
          </p>
          <p>Fecha y hora: {formData.dateTime}</p>
          <p>
            Coordenadas: {formData.coordinates.x}, {formData.coordinates.y}
          </p>
          <p>Dirección: {formData.adress}</p>
          <p>SN: {formData.serialNumber}</p>
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
