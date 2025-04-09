import { create } from 'zustand';

interface YoutubeVideoInfo {
    videoId: string;
    setVideoId: (id: string) => void;
}
const useYoutubeVideoStore = create<YoutubeVideoInfo>((set) => ({
    videoId: '',
    setVideoId: (id: string) => set({ videoId: id })
}))

export default useYoutubeVideoStore;