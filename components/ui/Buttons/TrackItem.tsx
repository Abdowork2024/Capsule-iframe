import useMusicDuration from "@/hooks/useMusicDuration";
import formatTime from "@/lib/formatTime";
import { removeNonASCII } from "@/lib/utils";

const TrackItem = ({
  isActive,
  song,
  onChangeTrack,
  index,
}: {
  isActive: boolean;
  song: any;
  onChangeTrack: (index: number) => void;
  index: number;
}) => {
  const { loading, duration } = useMusicDuration(song.audio);
  return (
    <li>
      <button
        onClick={() => onChangeTrack(index)}
        className={["w-full px-2 py-2 text-left", isActive ? "bg-black text-white" : null].join(
          " ",
        )}
        style={
          isActive
            ? {
                background: "var(--fg-color-secondary)",
                color: "var(--fg-color-primary)",
              }
            : undefined
        }
      >
        <div className="flex justify-between w-full overflow-hidden">
          <p className="truncate">{removeNonASCII(song.title)}</p>
          <p>{loading ? "..." : formatTime(duration)}</p>
        </div>
        <span className="truncate">
          {removeNonASCII(song.artist)}
          {!song.featuring ? "" : ` ft. ${removeNonASCII(song.featuring)}`}
        </span>
      </button>
    </li>
  );
};

export default TrackItem;
