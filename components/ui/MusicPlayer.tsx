"use client";

import TrackList from "./Buttons/TrackList";
import { SpeakerLeft, SpeakerRight } from "./Speakers";
import { OnlineLight } from "./OnlineLight";
import usePlayback from "@/hooks/usePlayback";

const MusicPlayer = (songs: any) => {
  const {
    audioRef,
    audioUrl,
    currentSongIndex,
    changeTrack,
    playNext,
    isPlaying,
    playPrevious,
    togglePlay,
  } = usePlayback(songs);

  const song = songs.songs;

  return (
    <div className="fade-in-delayed flex flex-col items-center gap-4 sm:gap-8">
      <div className="flex w-full max-w-[25rem] flex-col gap-8">
        <OnlineLight />
        <div
          className="flex flex-col rounded-[2rem] p-5"
          style={{
            borderRadius: "2rem",
            background: "rgba(255, 255, 255, 0.01)",
            boxShadow:
              "0px 4px 10px 0px rgba(0, 0, 0, 0.10) inset, 0px -5px 10px 0px rgba(255, 255, 255, 0.10) inset",
          }}
        >
          <div
            className="flex h-full max-h-[22rem] w-full flex-col overflow-hidden overflow-y-auto rounded-2xl border-[4px]"
            style={{
              background: "var(--fg-color-primary)",
              color: "var(--fg-color-secondary)",
              minHeight: "20rem",
              borderColor: "#222",
              boxShadow: `1px 1px 3.2px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 40px 0px rgba(0, 0, 0, 0.25) inset`,
            }}
          >
            <TrackList
              songs={song}
              onChangeTrack={changeTrack}
              currentSongIndex={currentSongIndex}
            />
            <audio ref={audioRef} onEnded={playNext} className="hidden" controls={isPlaying}>
              <source src={audioUrl} type="audio/mpeg"></source>
            </audio>
          </div>
        </div>
      </div>
      {/** Speaker Controls */}
      <div className="fade-in-delayed flex items-center gap-6 sm:gap-20">
        <SpeakerLeft />
        <div
          className="flex justify-center gap-2 rounded-full p-4 sm:gap-5 sm:p-6"
          style={{
            background: "rgba(255, 255, 255, 0.01)",
            boxShadow:
              "0px 4px 10px 0px rgba(0, 0, 0, 0.10) inset, 0px -5px 10px 0px rgba(255, 255, 255, 0.10) inset",
          }}
        >
          <button className="player-button" onClick={playPrevious}>
            <svg
              width="21"
              height="10"
              viewBox="0 0 21 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5107 0.864265L20.5107 9.13574C20.5107 9.52024 20.0948 9.76086 19.7615 9.56919L12.5689 5.43345C12.2346 5.2412 12.2346 4.7588 12.5689 4.56655L19.7615 0.430812C20.0948 0.239146 20.5107 0.479757 20.5107 0.864265Z"
                fill="#B3B3B3"
              />
              <path
                d="M11.8149 0.864265L11.8149 9.13574C11.8149 9.52024 11.399 9.76086 11.0657 9.56919L3.87312 5.43345C3.53877 5.2412 3.53877 4.7588 3.87312 4.56655L11.0657 0.430812C11.399 0.239146 11.8149 0.479757 11.8149 0.864265Z"
                fill="#B3B3B3"
              />
              <rect
                x="3.11963"
                y="10"
                width="2.6087"
                height="10"
                rx="0.5"
                transform="rotate(-180 3.11963 10)"
                fill="#B3B3B3"
              />
            </svg>
          </button>

          <button className="player-button" onClick={togglePlay}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="14.3262" y="7" width="3" height="10" rx="0.5" fill="#B3B3B3" />
              <rect x="19.3262" y="7" width="3" height="10" rx="0.5" fill="#B3B3B3" />
              <path
                d="M1.32623 16.1502L1.32623 7.84976C1.32623 7.46852 1.73579 7.22753 2.06905 7.41268L9.53949 11.5629C9.8824 11.7534 9.8824 12.2466 9.53949 12.4371L2.06905 16.5873C1.73579 16.7725 1.32623 16.5315 1.32623 16.1502Z"
                fill="#B3B3B3"
              />
            </svg>
          </button>

          <button className="player-button" onClick={playNext}>
            <svg
              width="21"
              height="10"
              viewBox="0 0 21 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.163084 9.13573L0.163086 0.864264C0.163086 0.479755 0.578989 0.239144 0.912321 0.430811L8.10491 4.56655C8.43926 4.7588 8.43926 5.2412 8.10491 5.43345L0.91232 9.56919C0.578987 9.76085 0.163084 9.52024 0.163084 9.13573Z"
                fill="#B3B3B3"
              />
              <path
                d="M8.85889 9.13573L8.85889 0.864264C8.85889 0.479755 9.27479 0.239144 9.60812 0.430811L16.8007 4.56655C17.1351 4.7588 17.1351 5.2412 16.8007 5.43345L9.60812 9.56919C9.27479 9.76085 8.85889 9.52024 8.85889 9.13573Z"
                fill="#B3B3B3"
              />
              <rect x="17.5542" width="2.6087" height="10" rx="0.5" fill="#B3B3B3" />
            </svg>
          </button>
        </div>

        <SpeakerRight />
      </div>
    </div>
  );
};

export default MusicPlayer;
