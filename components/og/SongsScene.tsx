import SongList from "./SongList";

const SongsScene = ({
  fgPrimary,
  fgSecondary,
  songs,
}: {
  fgPrimary: string;
  fgSecondary: string;
  songs: any;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          top: 146,
          overflow: "hidden",
          borderRadius: 10,
          background: fgPrimary,
          color: fgSecondary,
          border: "4px solid #222",
        }}
      >
        <SongList songs={songs} />
      </div>
    </div>
  );
};

export default SongsScene;
