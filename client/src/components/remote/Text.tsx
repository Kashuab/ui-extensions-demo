import { createRemoteReactComponent } from "@remote-ui/react";

export type TextProps = {
  children: string;
}

export const Text = createRemoteReactComponent<"Text", TextProps>("Text");
