import React from "react";
import "./App.css";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = React.useState(true);

  function mute() {
    const element = video.current;
    if (element) element.muted = !element.muted;
  }

  function pictureInPicture() {
    const element = video.current;
    if (element) element.requestPictureInPicture();
  }

  function videoSpeed(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    const speed = target.dataset["speed"];
    const element = video.current;
    if (element && speed) element.playbackRate = Number(speed);
  }

  function advanceTwoSeconds() {
    if (video.current) video.current.currentTime += 2;
  }

  function checkStatus() {
    const element = video.current;
    const status = element?.paused;
    setPaused(Boolean(status));
  }

  function handlePauseOrPlay() {
    const element = video.current;
    if (paused) element?.play();
    else element?.pause();
    checkStatus();
  }

  return (
    <div>
      <ul className="controls" style={{ display: "flex", gap: "30px" }}>
        <button onClick={handlePauseOrPlay}>{paused ? "Play" : "Pause"}</button>
        <button onClick={advanceTwoSeconds}>+ 2s</button>
        <button data-speed={1} onClick={videoSpeed}>
          1x
        </button>
        <button data-speed={2} onClick={videoSpeed}>
          2x
        </button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>M</button>
      </ul>
      <div>
        <video
          src="../assets/video.mp4"
          controls
          ref={video}
          onPlay={checkStatus}
          onPause={checkStatus}
        ></video>
      </div>
    </div>
  );
}

export default App;
