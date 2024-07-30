import { useState } from "react";
import "./App.css";

function App() {
  const [networkCount, setNetworkCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [messagingCount, setMessagingCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notificationCount})</button>

      <button>Me</button>
    </>
  );
}

export default App;
