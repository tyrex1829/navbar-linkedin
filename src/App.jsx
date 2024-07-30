import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button>Home</button>

      <button>My network ()</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notification ()</button>

      <button>Me</button>
    </>
  );
}

export default App;
