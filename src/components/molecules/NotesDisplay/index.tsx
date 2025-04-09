/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useYoutubeVideoStore, useNotePad } from "../../../lib/hooks";
import { NOTEPAD_TYPE } from "../../../lib/hooks/useNotePad";
import Textfield from "../../atoms/TextField";
import { convertToMin } from "../../../lib/helpers";
import style from "./style.module.scss";

const NotesDisplay = () => {
  const {
    youtubeNotePadData,
    setInitialYoutubeNotePadData,
    setNoteUpdateYoutubeNotePadData,
    setDeleteYoutubeNotePadData,
  } = useNotePad();
  const { videoId } = useYoutubeVideoStore();
  useEffect(() => {
    const youtube_data = JSON.parse(
      localStorage.getItem("youtube_data") ?? "{}"
    );
    setInitialYoutubeNotePadData(youtube_data);
  }, []);

  useEffect(() => {
    localStorage.setItem("youtube_data", JSON.stringify(youtubeNotePadData));
  }, [youtubeNotePadData]);

  const handleNoteFieldUpdate = (passedNote: string, passedIndex: number) => {
    setNoteUpdateYoutubeNotePadData(videoId, passedIndex, passedNote);
  };
  const handleTitleFieldUpdate = (passedTitle: string, passedIndex: number) => {
    console.log('passedTitle -> ',passedTitle, 'passedIndex _> ',passedIndex)
    // setTitleUpdateYoutubeNotePadData(videoId, passedIndex, passedTitle);
  };
  return (
    <div className={`${style["note-block"]} mt-3 w-100`}>
      {Object.values(youtubeNotePadData).length > 0 &&
        youtubeNotePadData[videoId]?.map(
          (notePadObj: NOTEPAD_TYPE, keyIndex: number) => {
            return (
              <div
                className="mb-3 p-3 rounded-2 border text-white "
                key={notePadObj.id}
              >
                <p>Video Id: {notePadObj.id}</p>
                <p>Video title: {notePadObj.videoTitle}</p>
                <p>Time: {notePadObj.time}</p>
                <p>
                  Video Timestamp:{" "}
                  {convertToMin(parseFloat(notePadObj.timestamp))} Min
                </p>
                <div className="mb-3">
                  <Textfield
                    outerClassName="d-flex flex-column"
                    labelClassName="text-light"
                    className="text-light"
                    label="Title"
                    type="text"
                    placeholder="Update Title"
                    disabled={true}
                    value={notePadObj.title}
                    onTextFieldChange={(e: any) =>
                      handleTitleFieldUpdate(e.target.value, keyIndex)
                    }
                  />
                  <button className="mt-2 btn btn-primary">Edit</button>
                </div>
                <div>
                  <Textfield
                    outerClassName="d-flex flex-column "
                    labelClassName="text-light"
                    className="text-light"
                    label="Note"
                    type="text"
                    placeholder="Update Note"
                    value={notePadObj.note}
                    disabled={true}
                    onTextFieldChange={(e: any) =>
                      handleNoteFieldUpdate(e.target.value, keyIndex)
                    }
                  />
                  <button className="mt-2 btn btn-primary">Edit</button>
                </div>

                <div className="mt-3">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      setDeleteYoutubeNotePadData(videoId, keyIndex)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default NotesDisplay;
