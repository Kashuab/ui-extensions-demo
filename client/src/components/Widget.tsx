import { Box, GridItem, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { createController, createRemoteReceiver, RemoteRenderer } from '@remote-ui/react/host';
import { HostComponents } from "./host";

export type IWidget = {
  id: string;
  title: string;
  description: string;
  icon: string;
  sourceUrl: string;
  width: number;
  height: number;
}

type WidgetProps = {
  widget: IWidget;
}

export function Widget(props: WidgetProps) {
  const { widget } = props;

  const controller = useMemo(() => createController(HostComponents), []);
  const receiver = useMemo(() => createRemoteReceiver(), []);

  const workerRef = useRef<Worker | null>(null);

  const loadWidget = useCallback(async () => {
    if (workerRef.current) return workerRef.current = null;

    const worker = new Worker(widget.sourceUrl, {
      type: "module",
      name: `widget-${widget.title}-${widget.id}`
    });

    workerRef.current ||= worker;
    
    worker.addEventListener('message', event => {
      receiver.receive(event.data.type, ...event.data.payload);
    });

    return worker;
  }, [widget, receiver]);

  useEffect(() => {
    loadWidget();
  }, [loadWidget]);

  return (
    <GridItem colSpan={Math.min(widget.width, 12)} rowSpan={Math.min(widget.height, 12)} bgColor="rgba(255, 255, 255, 0.1)" borderRadius="md">
      <Box px={2} py={1} borderBottomWidth={1}>
        <Text>{props.widget.title}</Text>
      </Box>

      <Box w="100%" h="100%" p={2}>
        <RemoteRenderer controller={controller} receiver={receiver} />
      </Box>
    </GridItem>
  )
}
