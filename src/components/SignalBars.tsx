export const SignalBars = ({ level }:{level:number}) => {
  const bars = ["▂", "▃", "▄", "▆", "▇"];
  const signal = bars.slice(0, level).join("");

  return (
    <span style={{ color: "gold", fontSize: "1.5em" }}>
      {signal}
    </span>
  );
};


