import "./App.css";
import Form from "./Form.jsx";
import Output from "./Output.jsx";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    type: "",
    zone: "",
    affected: "",
    gpon: { f: 0, s: 0, p: 0 },
    date: "",
    time: "",
    coordinates: { x: "", y: "" },
    adress: "",
    serialNumber: "",
    ticketUrl: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    if (name === "f" || name === "s" || name === "p") {
      setFormData((prev) => ({
        ...prev,
        gpon: {
          ...prev.gpon,
          [name]: value,
        },
      }));
    } else if (name === "x" || name === "y") {
      setFormData((prev) => ({
        ...prev,
        coordinates: {
          ...prev.coordinates,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // console.log(JSON.stringify(formData, null, 2));
    }
  }

  return (
    <div className="w-full flex justify-between space-x-10">
      <div className="w-1/2">
        <Form formData={formData} handleChange={handleChange} />
      </div>
      <div className="w-1/2">
        <Output formData={formData} />
      </div>
    </div>
  );
}
