import { IWidget } from "../components/Widget";

export const widgets: IWidget[] = [
  {
    id: "1",
    title: "Clock (2x2)",
    description: "A clock widget",
    icon: "clock",
    sourceUrl: "/widgets/clock/client.esm.js",
    width: 2,
    height: 2
  },
  {
    id: "2",
    title: "Clock 2 (2x4)",
    description: "A clock widget",
    icon: "clock",
    sourceUrl: "/widgets/clock/client.esm.js",
    width: 2,
    height: 4
  },
  {
    id: "3",
    title: "Clock (4x4)",
    description: "A clock widget",
    icon: "clock",
    sourceUrl: "/widgets/clock/client.esm.js",
    width: 4,
    height: 4
  },
  {
    id: "4",
    title: "Clock (4x3)",
    description: "A clock widget",
    icon: "clock",
    sourceUrl: "/widgets/clock/client.esm.js",
    width: 4,
    height: 3
  }
];
