import "./App.css";
import Form from "./Form.jsx";
import Output from "./Output.jsx";
import { useState } from "react";
import Footer from "./Footer.jsx";

export default function App() {
  const [formData, setFormData] = useState({
    type: "f1",
    zone: "",
    affected: "",
    gpon: "",
    fsp: { f: 0, s: 0, p: 0 },
    dateTime: "",
    coordinates: { x: "", y: "" },
    adress: "",
    serialNumber: "",
    telefono:"",
    ticketUrl: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    if (name === "f" || name === "s" || name === "p") {
      setFormData((prev) => ({
        ...prev,
        fsp: {
          ...prev.fsp,
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
    <div>
      <div className="max-w-[1280px] mx-auto p-8 my-12">
        <div className="w-full flex justify-between">
          {" "}
          <div className="w-1/2">
            <Form formData={formData} handleChange={handleChange} />
          </div>
          <div className="w-1/2">
            <Output formData={formData} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
