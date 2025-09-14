import { useState } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";

export default function Output({ formData }) {
  const [copied, setCopied] = useState(false);

  function copyNumber() {
    //navigator.clipboard.writeText(formData);

    setCopied(true);
  }
  return (
    <div className="">
      <div className="border rounded-xs p-10 ">
        <h2>
          LOS {formData.type} ROJO - ZONA {formData.zone}
          {""} {formData.affected} CLIENTES AFECTADOS
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
          <p>Tarea: {formData.ticketUrl}</p>
        </div>
      </div>
      <button
        id="format-btn"
        className={`${
          copied ? "bg-green-600" : "bg-black"
        } w-full text-white font-medium py-3 px-4 rounded-md`}
        onClick={() => !copied && copyNumber()}
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
