import { create } from "zustand";

export interface NOTEPAD_TYPE {
  id: string;
  time: string;
  timestamp: string;
  videoTitle: string;
  title: string;
  note: string;
}
interface NotePadStore {
  youtubeNotePadData: Record<string, NOTEPAD_TYPE[]>;
  setYoutubeNotePad: (youtubeVideoId: string, notePadObj: NOTEPAD_TYPE) => void;
  setInitialYoutubeNotePadData: (
    notePadObj: Record<string, NOTEPAD_TYPE[]>
  ) => void;
  setTitleUpdateYoutubeNotePadData: (
    videoId: string,
    index: number,
    title: string
  ) => void;
  setNoteUpdateYoutubeNotePadData: (
    videoId: string,
    index: number,
    note: string
  ) => void;
  setDeleteYoutubeNotePadData: (videoId: string, index: number) => void;
}

const useNotePad = create<NotePadStore>((set) => ({
  youtubeNotePadData: {},
  setYoutubeNotePad: (youtubeVideoId: string, notePadObj: NOTEPAD_TYPE) =>
    set((state) => ({
      youtubeNotePadData: {
        ...state.youtubeNotePadData,
        [youtubeVideoId]: [
          ...(state.youtubeNotePadData[youtubeVideoId] || []),
          notePadObj,
        ],
      },
    })),
  setInitialYoutubeNotePadData: (
    passedYoutubeNotePadData: Record<string, NOTEPAD_TYPE[]>
  ) => set({ youtubeNotePadData: passedYoutubeNotePadData }),

  setTitleUpdateYoutubeNotePadData: (
    videoId: string,
    passedIndex: number,
    passedTitle: string
  ) =>
    set((state) => ({
      youtubeNotePadData: {
        ...state.youtubeNotePadData,
        [videoId]: {
          ...state.youtubeNotePadData[videoId],
          [passedIndex]: {
            ...state.youtubeNotePadData[videoId][passedIndex],
            title: passedTitle,
          },
        },
      },
    })),

  setNoteUpdateYoutubeNotePadData: (
    videoId: string,
    passedIndex: number,
    passedNote: string
  ) =>
    set((state) => ({
      youtubeNotePadData: {
        ...state.youtubeNotePadData,
        [videoId]: {
          ...state.youtubeNotePadData[videoId],
          [passedIndex]: {
            ...state.youtubeNotePadData[videoId][passedIndex],
            note: passedNote,
          },
        },
      },
    })),

  setDeleteYoutubeNotePadData: (videoId: string, passedIndex: number) =>
    set((state) => ({
      youtubeNotePadData: {
        ...state.youtubeNotePadData,
        [videoId]: [
          ...state.youtubeNotePadData[videoId].slice(0, passedIndex),
          ...state.youtubeNotePadData[videoId].slice(passedIndex + 1),
        ],
      },
    })),
}));

export default useNotePad;
