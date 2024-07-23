export function OnlineLight() {
  return (
    <div
      className="fade-in-delayed relative hidden h-6 w-6 self-end rounded-full sm:flex"
      style={{
        background: "rgba(255, 255, 255, 0.01)",
        boxShadow:
          "0px 4px 10px 0px rgba(0, 0, 0, 0.10) inset, 0px -5px 10px 0px rgba(255, 255, 255, 0.10) inset",
        display: "flex",
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
        style={{
          background: "#30FFCC",
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
        style={{
          background: "#30FFCC",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset",
          filter: "drop-shadow(0px 1px 2px rgba(255, 255, 255, 0.50))",
        }}
      />
    </div>
  );
}
