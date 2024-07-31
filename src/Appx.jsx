// till now we have done hard coded values for notification, no backend no fetching etc no automatic updation of notification.

// Now we will fetch api for notifications, update automatically, no hard coded.

import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { notifications, totalNotificationSelector } from "./atomsx";

function Appx() {
  return (
    <RecoilRoot>
      <RealApp />
    </RecoilRoot>
  );
}

function RealApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>

      <button>Jobs ({networkCount.jobs})</button>

      <button>Messaging ({networkCount.messaging})</button>

      <button>Notification ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default Appx;
