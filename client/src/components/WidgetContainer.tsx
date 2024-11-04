import { Grid } from "@chakra-ui/react";
import { IWidget, Widget } from "./Widget";

type WidgetContainerProps = {
  widgets: IWidget[];
}

export function WidgetContainer(props: WidgetContainerProps) {
  return (
    <Grid
      w="100%"
      h="100%"
      p={2}
      borderWidth={1}
      borderRadius="md"
      bgColor="rgba(255, 255, 255, 0.1)"
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(12, 1fr)"
      gap={2}
    >
      {props.widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </Grid>
  )
}
