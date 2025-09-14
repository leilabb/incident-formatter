import { useState } from "react";

export default function Form({ formData, handleChange }) {
  return (
    <div className="">
      {/*  Radio buttons F1, D2, C3  */}
      <div className="mb-6">
        <label className="text-left block text-sm font-medium text-gray-700 mb-3">
          Tipo
        </label>
        <div
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="F1"
              className="text-blue-600 focus:ring-blue-500"
              id="f1"
            />
            <span className="ml-2 text-gray-700">F1</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="D2"
              className="text-blue-600 focus:ring-blue-500"
              id="d2"
            />
            <span className="ml-2 text-gray-700">D2</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="C3"
              className="text-blue-600 focus:ring-blue-500"
              id="c3"
            />
            <span className="ml-2 text-gray-700">C3</span>
          </label>
        </div>
      </div>

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
          Zona
        </label>
        <select
          id="zone"
          name="zone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccionar zona</option>
          <option value="SAN PEDRO">SAN PEDRO</option>
          <option value="LA MANGA">LA MANGA</option>
          <option value="MALAGA">MALAGA</option>
          <option value="ALGECIRAS">ALGECIRAS</option>
          <option value="FUENGIROLA">FUENGIROLA</option>
          <option value="HUELVA">HUELVA</option>
          <option value="CHICLANA">CHICLANA</option>
        </select>
      </div>

      {/* <!-- Clientes afectados --> */}
      <div
        className="mb-6"
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
          id="clientes"
          min="0"
          placeholder="Número de clientes"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* <!-- Puertos --> */}
      <div className="mb-6 w-full">
        <label className="text-left block text-sm font-medium text-gray-700 mb-2">
          Puertos
        </label>
        <div className="flex space-x-2">
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

      {/* <!-- Fecha y hora--> */}
      <div className="mb-6 flex justify-between">
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
      {/* Coordenadas */}
      <div className="mb-6">
        <label className="text-left block text-sm font-medium text-gray-700 mb-2">
          Coordenadas
        </label>
        <div className="flex space-x-3">
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

      {/* Dirección */}
      <div className="mb-6">
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

      {/* <!-- S/N --> */}
      <div className="mb-6">
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

      {/* <!-- Tarea --> */}
      <div className="mb-8">
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        ></textarea>
      </div>
    </div>
  );
}
