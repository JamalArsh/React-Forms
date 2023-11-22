import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormCommon from "./components/FormCommon/FormCommon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormCommon></FormCommon>
    </>
  );
}

export default App;
