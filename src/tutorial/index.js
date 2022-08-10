import React, { useState } from "react";
import { Progress } from "antd";
import ReactPlayer from "react-player";
import "./index.css";

const Index = () => {
  const [progress, setProgress] = useState({
    played: 0,
    playedSeconds: 0,
  });
  const [duration, setDuration] = useState();
  var progressMin = Math.floor((progress.playedSeconds / 60) << 0);
  var progressSec = Math.floor(progress.playedSeconds % 60);

  var durationMin = Math.floor((duration / 60) << 0);
  var durationSec = Math.floor(duration % 60);

  const onEnd = () => {
    console.log("HAHAHAHAHA");
  };

  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <div className="progress">
        <Progress percent={(progress.playedSeconds/duration)*100} />
      </div>
      <div className="video-player">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=t0Q2otsqC4I"
          onEnded={onEnd}
          width="100%"
          height="95vh"
          onProgress={(e) => setProgress(e)}
          onDuration={(e) => setDuration(e)}
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                controls: 1,
              },
            },
          }}
        />
      </div>
      <h3>
        Duration = {progressMin} : {progressSec} / {durationMin} : {durationSec}
      </h3>
    </div>
  );
};

export default Index;
