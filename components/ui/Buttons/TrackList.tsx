import React from "react";
import TrackItem from "./TrackItem";

const TrackList = ({
  songs,
  onChangeTrack,
  currentSongIndex,
}: {
  songs: any[];
  onChangeTrack: (index: number) => void;
  currentSongIndex?: number | null;
}) => (
  <ul className="fade-in w-full">
    {songs.map((song: any, index) => {
      const isActive = index === currentSongIndex;
      return (
        <TrackItem
          onChangeTrack={onChangeTrack}
          index={index}
          song={song}
          key={index}
          isActive={isActive}
        />
      );
    })}
  </ul>
);

export default TrackList;
