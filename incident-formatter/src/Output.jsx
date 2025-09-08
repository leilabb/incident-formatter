export default function Output(formData) {
  return (
    <div className="">
      <div className="border rounded-xs p-10 ">
        LOS ROJO - ZONA
        {/* {formData.zona} */}
      </div>
      <button
        id="format-btn"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Copiar
      </button>
    </div>
  );
}
