import { Text as CText } from "@chakra-ui/react";
import { TextProps } from "../remote/Text";

export function Text({ children }: TextProps) {
  return <CText>{children}</CText>;
}
