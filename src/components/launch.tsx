import styles from "@styles/index.module.css";
import { useState } from "react";
// import {ExternalLink} from 'lucide-react';





export default function Launch() {
  const [url, setUrl] = useState("");

  const getCredentials = async () => {
    if (!url) {
      const response = await fetch("/data.json", {
        method: "GET",
      });
      const data = await response.json();
      console.log("the data is "+JSON.stringify(data))
      setUrl(data.signin); // No need to await here
      console.log("the url is "+data.signin) // Use data.signin directly
      window.open(data.signin, "_blank"); // Use data.signin directly
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div style={{ paddingBottom: "20px", justifyContent: "center" }}>
      <button id="Button" className={styles.buttons2} onClick={getCredentials}>
        Open LaunchDarkly
      </button>
    </div>
  );
}
