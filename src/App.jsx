import { useState } from "react";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const MessagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>

      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>

      <button>
        Messaging ({MessagingCount >= 100 ? "99+" : MessagingCount})
      </button>

      <button>
        Notification ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>

      <button>Me</button>
    </>
  );
}

export default App;
