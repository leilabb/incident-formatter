import Form from "./Form.jsx";
import Output from "./Output.jsx";
import { useState } from "react";
import Footer from "./Footer.jsx";

export default function App() {
  const [formData, setFormData] = useState({
    type: "",
    zone: "",
    affected: "",
    gpon: "",
    equipo: "",
    dateTime: "",
    coordinates: "",
    adress: "",
    serialNumber: "",
    ticketUrl: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;  
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  }

  return (
      <div>
      <div className="max-w-[1280px] mx-auto p-8 my-12">
        <div className="w-full flex justify-between">
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
