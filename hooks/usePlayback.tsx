import getLink from "@/lib/utils/getLink";
import { useEffect, useRef, useState } from "react";

const usePlayback = (songs: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const song = songs.songs;
  const currentSong = currentSongIndex === null ? null : song[currentSongIndex];
  const audioUrl = getLink(currentSong?.audio);
  const audioRef = useRef(new Audio(audioUrl));

  const togglePlay = () => {
    if (!currentSongIndex) {
      changeTrack(0);
    }
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const changeTrack = (id: any) => {
    setCurrentSongIndex(id);
    setIsPlaying(true);
  };

  const playNext = () => {
    const nextId = ((currentSongIndex || 0) + 1) % song.length;
    changeTrack(nextId);
  };

  const playPrevious = () => {
    const nextId = (currentSongIndex + song.length - 1) % song.length;
    changeTrack(nextId);
  };

  useEffect(() => {
    (audioRef as any).current.src = audioUrl;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUrl]);

  return {
    audioRef,
    audioUrl,
    currentSong,
    isPlaying,
    togglePlay,
    changeTrack,
    currentSongIndex,
    playNext,
    playPrevious,
  };
};

export default usePlayback;
