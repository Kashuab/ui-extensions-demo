# React UI Extensions example

This is an example of how to sandbox third-party React components and render them.
The example uses `@remote-ui/react`, which is what Shopify uses for their UI extensions.

## Running the example

```bash
npm install
npm run build-clock
npm run dev
```

You'll see 4 clock widgets rendered in the app. Each of these widgets are rendered in a separate worker thread.

**Important files:**

- `src/components/host/index.ts`: This is where you can add new host components.
  
  These components are hidden from UI extension developers, as part of Shopify checkout source code.

- `src/components/remote/index.ts`: This is where you can add new remote components.

   The third party script imports components from this file to render. This is akin to Shopify's
   `@shopify/ui-extensions-react/checkout` package. 

- `src/widgets/util/renderWidget.tsx`: This is where we render the widgets within the workers.

   This takes care of communicating the React element tree to the main thread via `postMessage`.

- `src/components/Widget.tsx`: This is the component that renders the third-party widgets within the app.

   It instantiates a worker, and receives messages from the worker thread to render the widgets.

- `src/data/widgets.ts`: This is where we define the widgets that will be rendered in the app.

  Each widget has a `sourceUrl`, which is the URL of the third-party script to be loaded.
  This demonstrates how applied extensions can be stored as data, consumed by the first-party app.
