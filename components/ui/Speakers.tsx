export function SpeakerLeft() {
  return (
    <div className="grid w-[46px] grid-cols-3 gap-2">
      <SpeakerDot />
      <SpeakerDot />
      <SpeakerDot />
    </div>
  );
}

export function SpeakerRight() {
  return (
    <div className="w-[46px] flex justify-center">
      <div className="grid w-max grid-cols-2 gap-2">
        <SpeakerDot />
        <SpeakerDot />
        <SpeakerDot />
        <SpeakerDot />
      </div>
    </div>
  );
}

function SpeakerDot() {
  return <div className="h-2.5 w-2.5 rounded-full bg-black opacity-75" />;
}
