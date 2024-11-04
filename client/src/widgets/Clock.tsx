import { useEffect, useState } from "react";
import { Text } from "../components/remote";
import { renderWidget } from "./util/renderWidget";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text>{time.toLocaleTimeString()}</Text>
  )
};

renderWidget(Clock);
