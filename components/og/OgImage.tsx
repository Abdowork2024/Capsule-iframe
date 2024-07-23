import React from "react";
import SongsScene from "./SongsScene";

export default function OgImage({
  bgColor,
  fgPrimary,
  fgSecondary,
  songs,
}: {
  bgColor: string;
  fgPrimary: string;
  fgSecondary: string;
  songs: any;
}) {
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.imgur.com/AWUoFnd.png")',
        backgroundColor: bgColor.slice(-7),
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        position: "relative",
        fontFamily: "m",
        fontWeight: "400",
        fontSize: 19,
        lineHeight: "1.5",
      }}
    >
      <SongsScene fgPrimary={fgPrimary} fgSecondary={fgSecondary} songs={songs} />
    </div>
  );
}
