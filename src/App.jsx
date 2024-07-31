import { useMemo, useState } from "react";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
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
  const notificationCount = useRecoilValue(notificationAtom);
  const [MessagingCount, setMessagingCount] = useRecoilState(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

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

      <button
        onClick={() => {
          setMessagingCount((c) => c + 1);
        }}
      >
        Me ({totalNotificationCount})
      </button>
    </>
  );
}

export default App;
