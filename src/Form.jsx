export default function Form({ formData, handleChange }) {
  const zones = [
    "SAN PEDRO",
    "LA MANGA",
    "MALAGA",
    "ALGECIRAS",
    "FUENGIROLA",
    "HUELVA",
  ];
  const tipos = ["D2", "C3"];

  return (
    <div className="">
      {/*  Radio buttons D2, C3  */}
      <div className="flex mb-6 space-x-26">
        <div className="flex flex-col">
          <label className="text-left block text-sm font-medium text-gray-700 mb-2">
            Tipo
          </label>
          <div
            onChange={(event) => {
              handleChange(event);
            }}
            className="flex px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <label className="space-x-2 flex flex-row items-center">
              {tipos.map((tipo) => {
                return (
                  <div>
                    <span className=" text-gray-700">{tipo}</span>
                    <input
                      type="radio"
                      name="type"
                      value={tipo}
                      className="ml-2 text-blue-600 focus:ring-blue-500"
                      id={tipo}
                    />
                  </div>
                );
              })}
            </label>
          </div>
        </div>

        {/* <!-- Clientes afectados --> */}
        <div
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <label
            for="clientes"
            className="text-left block text-sm font-medium text-gray-700 mb-2"
          >
            Clientes afectados
          </label>
          <input
            name="affected"
            type="number"
            id="affected"
            min="0"
            placeholder="N de clientes"
            className="w-42 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className=" flex justify-items-start space-x-12">
        {/*  Zona dropdown --> */}
        <div
          className="mb-6"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <label
            for="zone"
            className="block text-left text-sm font-medium text-gray-700 mb-2"
          >
            Zona{" "}
            <a href="https://maps.google.com/" target="_blank">
              <span className="text-xs">Mapa</span>
            </a>
          </label>
          <select
            id="zone"
            name="zone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar zona</option>
            {zones.map((zone) => {
              return (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              );
            })}
          </select>
        </div>

        {/* Dirección */}
        <div className="">
          <label
            for="direccion"
            className="text-left block text-sm font-medium text-gray-700 mb-2"
          >
            Dirección
          </label>
          <input
            name="adress"
            type="text"
            id="direccion"
            placeholder="Dirección"
            onChange={(event) => {
              handleChange(event);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* <!-- Puertos --> */}
      <div className="flex flex-row space-x-14 mb-6">
        {/* <!-- Fecha y hora--> */}
        <div className="flex flex-col">
          <label
            for="fecha"
            className="text-left text-sm font-medium text-gray-700 mb-2"
          >
            Fecha
          </label>
          <input
            name="date"
            type="date"
            id="fecha"
            onChange={(event) => {
              handleChange(event);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-left text-sm font-medium text-gray-700 mb-2">
            Hora
          </label>
          <input
            name="time"
            type="time"
            id="fecha"
            onChange={(event) => {
              handleChange(event);
            }}
            className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-6 flex space-x-12">
        <div className="flex flex-col">
          <label className="text-left block text-sm font-medium text-gray-700 mb-2">
            Puertos
          </label>
          <div className="flex w-44 space-x-2">
            <input
              name="f"
              type="text"
              id="puerto1"
              placeholder="f"
              onChange={(event) => {
                handleChange(event);
              }}
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="flex items-center text-gray-500">/</span>
            <input
              name="s"
              type="text"
              id="puerto2"
              placeholder="s"
              onChange={(event) => {
                handleChange(event);
              }}
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="flex items-center text-gray-500">/</span>
            <input
              name="p"
              type="text"
              id="puerto3"
              placeholder="p"
              onChange={(event) => {
                handleChange(event);
              }}
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        {/* Coordenadas */}

        <div className="flex flex-col">
          <label className="text-left block text-sm font-medium text-gray-700 mb-2">
            Coordenadas{" "}
            <a href="https://www.userside.eu/en" target="_blank">
              <span className="text-xs">Userside</span>
            </a>
          </label>
          <div className="flex w-44 space-x-2">
            <input
              name="x"
              type="text"
              id="coord1"
              placeholder="x"
              onChange={(event) => {
                handleChange(event);
              }}
              className="w-1/3 flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="flex items-center text-gray-500">,</span>
            <input
              name="y"
              type="text"
              id="coord2"
              placeholder="y"
              onChange={(event) => {
                handleChange(event);
              }}
              className="w-1/3 flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* <!-- S/N --> */}
      <div className="mb-6 flex space-x-6">
        <div className="flex flex-col">
          <label
            for="sn"
            className="text-left  block text-sm font-medium text-gray-700 mb-2"
          >
            SN
          </label>
          <input
            name="serialNumber"
            type="text"
            id="sn"
            placeholder="Número de serie"
            onChange={(event) => {
              handleChange(event);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      {/* <!-- Tarea --> */}
      <div className="flex flex-col">
        <label
          for="tarea"
          className="text-left block text-sm font-medium text-gray-700 mb-2"
        >
          Tarea
        </label>
        <textarea
          name="ticketUrl"
          id="tarea"
          rows="1"
          placeholder="Enlace tarea"
          onChange={(event) => {
            handleChange(event);
          }}
          className="w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        ></textarea>
        <button
          id="format-btn"
          className="bg-black w-fit mt-2 w-1/4 text-white font-medium py-3 px-4 rounded-md"
        >
          Enviar a chat de Averías
        </button>
      </div>
    </div>
  );
}
