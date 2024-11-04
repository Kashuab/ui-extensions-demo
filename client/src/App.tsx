import { Box } from "@chakra-ui/react"
import { WidgetContainer } from "./components/WidgetContainer"
import { widgets } from "./data/widgets"

function App() {
  return (
    <Box w="100vw" h="100vh" p="2">
      <WidgetContainer widgets={widgets} />
    </Box>
  )
}

export default App
