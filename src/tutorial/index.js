import React, { useEffect, useRef, useState } from "react";

import { Progress } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

import ReactPlayer from "react-player";

import "./index.css";

const Index = () => {
  const [state, setState] = useState({
    playing: false,
    controls: false,
  });
  const [progress, setProgress] = useState({
    played: 0,
    playedSeconds: 0,
  });
  const [duration, setDuration] = useState();

  const playerRef = useRef(null);

  var progressMin = Math.floor((progress.playedSeconds / 60) << 0);
  var progressSec = Math.floor(progress.playedSeconds % 60);

  var durationMin = Math.floor((duration / 60) << 0);
  var durationSec = Math.floor(duration % 60);

  const handleOnPlay = () => {
    if (!state.playing) {
      setState({ ...state, playing: true });
    }
  };

  const handleOnStart = () => {
    let getCurr = JSON.parse(localStorage.getItem("currentTime"));
    if (getCurr) {
      playerRef.current.seekTo(getCurr);
    } 
    setState({ ...state, playing: true });
  };

  const handleOnBack = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    handleOnPlay();
  };

  return (
    <div>
      <div className="video_player">
        <ReactPlayer
          className="react_player"
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                controls: 0,
              },
            },
          }}
          url="https://www.youtube.com/watch?v=rfTgO9rpqck"
          ref={playerRef}
          playing={true}
          width="100%"
          height="95vh"
          onPlay={handleOnPlay}
          onStart={handleOnStart}
          onProgress={(e) => {
            setProgress(e);
            if (e.playedSeconds > 5)
              localStorage.setItem(
                "currentTime",
                JSON.stringify(Math.round(e.playedSeconds))
              );
          }}
          onDuration={(e) => setDuration(e)}
        />
      </div>
      <div className="status_container">
        <div className="duration">
          <h3>
            {progressMin} : {progressSec} / {durationMin} : {durationSec}
          </h3>
        </div>
        <div className="backward" onClick={handleOnBack}>
          <RollbackOutlined />
        </div>
        <div className="progress">
          <Progress
            percent={Math.round((progress.playedSeconds / duration) * 100)}
            showInfo={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
