/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import style from "./style.module.scss";

// Extend the Window interface to include onYouTubeIframeAPIReady
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}
import TextField from "../../atoms/TextField";
import { useYoutubeVideoStore } from "../../../lib/hooks";

interface YOUTUBE_STREAM_TYPE {
  video: string;
  start: number;
}

const YoutubeFrameContainer = () => {
  const [youtubeVideoId, setYoutubeVideoId] = useState("HEfNosHQPXQ");
  const { setVideoId } = useYoutubeVideoStore();
  const [videoStartTime, setVideoStartTime] = useState(0);

  const [videoStreamData, setVideoStreamData] = useState<YOUTUBE_STREAM_TYPE>({
    video: "",
    start: 0,
  });

  useEffect(() => {
    // Load the YouTube Iframe API
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // You can also listen to the YouTube API script load event if necessary
    script.onload = () => {
      console.log("YouTube API script loaded!");
    };
  }, []);

  useEffect(() => {
    handleYoutubeVideoSubmission(youtubeVideoId);
  }, []);

  const handleYoutubeVideoSubmission = (passedVideoId: string) => {
    setVideoId(passedVideoId);
    setVideoStreamData({
      video: youtubeVideoId,
      start: videoStartTime,
    });
  };

  return (
    <>
      <div className="d-block d-md-flex gap-3 w-100">
        <div className={`w-50 ${style["video-container"]}`}>
          <TextField
            outerClassName="d-flex flex-column mb-3 "
            label="YouTube Video ID"
            placeholder="Enter YouTube video ID"
            type="text"
            value={youtubeVideoId}
            onTextFieldChange={(e: any) => setYoutubeVideoId(e.target.value)}
          />
          <TextField
            outerClassName="d-flex flex-column mb-3"
            label="Video Start Time (Seconds)"
            placeholder="Enter start time in seconds"
            type="number"
            value={videoStartTime}
            onTextFieldChange={(e: any) => setVideoStartTime(e.target.value)}
          />
          <button
            className="btn btn-primary"
            disabled={youtubeVideoId.length === 0}
            onClick={() => handleYoutubeVideoSubmission(youtubeVideoId)}
          >
            Submit
          </button>
        </div>
        <iframe
          className={style["iframe-container"]}
          id="youtube-player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoStreamData.video}?enablejsapi=1&controls=1&start=${videoStreamData.start}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default YoutubeFrameContainer;
