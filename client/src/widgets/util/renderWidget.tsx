import { RemoteChannel } from "@remote-ui/core";
import { createRemoteRoot, createRoot } from "@remote-ui/react";
import * as RemoteComponents from "../../components/remote";

export function renderWidget(Component: () => React.ReactNode) {
  const channel: RemoteChannel = (type, ...args) => {
    postMessage({ type, payload: args });
  };
  
  const remoteRoot = createRemoteRoot(channel, {
    components: Object.values(RemoteComponents),
  });

  const root = createRoot(remoteRoot);
  root.render(<Component />);

  remoteRoot.mount();
}
