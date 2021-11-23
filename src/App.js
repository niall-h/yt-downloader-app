import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    setId(id);
  }, [videoUrl]);

  const handleClick = () => {
    if (!videoUrl) setMessage("Please enter a valid url.");
    else setMessage("Converting...");
  }

  const handleKeyPress = (e) => {
    if (e.code === 'Enter')
      handleClick();
  }

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles["title-text"]}>Youtube Video Downloader</div>
      </div>
      <div className={styles.body}>
        <div className={styles["body-content"]}>
          <ul className={styles.instructions}>
            <li>Step 1: Go to YouTube.com and find your favorite video.</li>
            <li>Step 2: Copy the url.</li>
            <li>Step 3: Paste it here and click convert!</li>
          </ul>
          <input
            className={styles.input}
            value={videoUrl}
            onKeyPress={handleKeyPress}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Paste your YouTube url here..."
          ></input>
          <button className={styles.button} onClick={handleClick}>
            Convert
          </button>
          <br />
          <message
            className={styles.message}
            style={
              message === "Converting..."
                ? { color: "black" }
                : { color: "red" }
            }
          >
            {message}
          </message>
        </div>
      </div>
    </div>
  );
}

export default App;
