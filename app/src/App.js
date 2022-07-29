import { ChakraProvider } from "@chakra-ui/react";
import List from "./components/List";
import { Heading, AppContainer, Backdrop } from "./components/AppContainer";

function App() {
  return (
    <ChakraProvider>
      <Backdrop />
      <AppContainer>
        <Heading>Quotes to keep you going</Heading>
        <List />
      </AppContainer>
    </ChakraProvider>
  );
}

export default App;
