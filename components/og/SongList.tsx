import { removeNonASCII } from "@/lib/utils";
import React from "react";
import formatTime from "@/lib/formatTime";

const SongList = ({ songs }: { songs: any }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 274,
        height: 242,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 8,
      }}
    >
      {songs.map((song: any, index: any) => (
        <span
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                width: 210,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {removeNonASCII(song.title)}
            </span>
            <span
              style={{
                width: 210,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {removeNonASCII(song.artist)}
              {!song.featuring ? "" : ` ft. ${removeNonASCII(song.featuring)}`}
            </span>
          </div>
          <span>{formatTime(song.duration)}</span>
        </span>
      ))}
    </div>
  );
};

export default SongList;
