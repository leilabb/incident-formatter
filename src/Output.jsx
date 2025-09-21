import { useState } from "react";

export default function Output({ formData }) {
  const [copied, setCopied] = useState(false);

  function copyNumber() {
    const formDataToCopy = `LOS ${formData.type} ROJO - ZONA ${formData.zone} ${formData.affected} CLIENTES AFECTADOS
Puertos: ${formData.gpon.f} / ${formData.gpon.s} / ${formData.gpon.p}
Fecha y hora: ${formData.date}, ${formData.time}
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
          LOS <span className="font-bold">{formData.type}</span> ROJO - ZONA{" "}
          <span className="font-bold">{formData.zone}</span>
          {""} <span className="font-bold"> {formData.affected} </span>CLIENTES
          AFECTADOS
        </h2>

        <div>
          <p>
            Puertos: {formData.gpon.f} / {formData.gpon.s} / {formData.gpon.p}
          </p>
          <p>
            Fecha y hora: {formData.date}, {formData.time}
          </p>
          <p>
            Coordenadas: {formData.coordinates.x}, {formData.coordinates.y}
          </p>
          <p>Dirección: {formData.adress}</p>
          <p>SN: {formData.serialNumber}</p>
          {/* <p>
            Tarea:{" "}
            <a href={formData.ticketUrl} target="_blank">
              {formData.ticketUrl}
            </a>
          </p> */}
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
