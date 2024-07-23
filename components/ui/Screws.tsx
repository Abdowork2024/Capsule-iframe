import { Fragment } from "react";

export function Screws() {
  return (
    <Fragment>
      <Screw className="fade-in-delayed fixed left-12 top-12 " />
      <Screw className="fade-in-delayed fixed right-12 top-12" />
      <Screw className="fade-in-delayed fixed bottom-12 left-12" />
      <Screw className="fade-in-delayed fixed bottom-12 right-12" />
    </Fragment>
  );
}

function Screw({ className }: { className: string }) {
  return (
    <div
      className={[
        className,
        "pointer-events-none hidden h-12 w-12 items-center justify-center rounded-full md:flex",
      ].join(" ")}
      style={{
        background: `rgba(255, 255, 255, 0.01)`,
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.10) inset, 0px -5px 10px 0px rgba(255, 255, 255, 0.10) inset`,
      }}
    >
      <div
        className="h-3 w-3 rounded-full"
        style={{
          background: "rgba(0, 0, 0, 0.75)",
          mixBlendMode: "multiply",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.50) inset",
          filter: "drop-shadow(0px 1px 1px rgba(255, 255, 255, 0.10))",
        }}
      />
    </div>
  );
}
