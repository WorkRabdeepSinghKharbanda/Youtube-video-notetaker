import { useEffect } from "react";
import { useNotePad } from "./lib/hooks";
import {
  Notepad,
  NotesDisplay,
  YoutubeFrameContainer,
} from "./components/molecules";
import "./App.css";

function App() {
  const { youtubeNotePadData } = useNotePad();

  useEffect(() => {
    if (youtubeNotePadData) {
      console.log("Local storage youtubeNotePadData ->  ", youtubeNotePadData);
    }
  }, [youtubeNotePadData]);

  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <h1 className="text-start w-100">Youtube Video Note Taker</h1>

      <YoutubeFrameContainer />
      <Notepad />
      <NotesDisplay />
    </div>
  );
}

export default App;
