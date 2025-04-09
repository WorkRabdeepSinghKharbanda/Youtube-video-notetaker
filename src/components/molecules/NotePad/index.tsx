/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import TextField from "../../atoms/TextField";
import { useNotePad } from "../../../lib/hooks/index";
import { useYoutubeVideoStore } from "../../../lib/hooks/index";
import style from "./style.module.scss";

const Notepad = () => {
  const [noteContent, setNoteContent] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const { setYoutubeNotePad } = useNotePad();
  const { videoId } = useYoutubeVideoStore();
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Wait for the API to be loaded and initialize the player
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        events: {
          onReady: (event: any) => {
            console.log("Player is ready", event);
          },
        },
      });
    };
  }, []);

  const getCurrentTime = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      return currentTime;
    }
  };

  const handleNoteSubmit = () => {
    const notePadData = {
      id: videoId,
      time: new Date().toString(),
      timestamp: getCurrentTime(),
      videoTitle: playerRef.current?.videoTitle ?? "",
      title: noteHeading,
      note: noteContent,
    };
    setYoutubeNotePad(videoId, notePadData);
  };

  return (
    <div className={style["notepad-container"]}>
      <h4 className="mb-2">Add New Note:</h4>
      <TextField
        outerClassName="d-flex flex-column mb-0"
        label="Add Title"
        placeholder="Enter Title Here"
        type="text"
        value={noteHeading}
        onTextFieldChange={(e: any) => setNoteHeading(e.target.value)}
      />
      <TextField
        label="Add Note"
        outerClassName="d-flex flex-column mb-3"
        placeholder="Enter Note Here"
        type="text"
        value={noteContent}
        onTextFieldChange={(e: any) => setNoteContent(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={handleNoteSubmit}
        disabled={noteHeading.length === 0 || noteContent.length === 0}
      >
        Submit
      </button>
    </div>
  );
};
export default Notepad;
