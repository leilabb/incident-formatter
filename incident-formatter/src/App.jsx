import "./App.css";
import Form from "./Form.jsx";
import Output from "./Output.jsx";

export default function App() {
  return (
    <div className="w-full flex justify-between space-x-10">
      <div className="w-1/2">
        <Form />
      </div>
      <div className="w-1/2">
        <Output />
      </div>
    </div>
  );
}
