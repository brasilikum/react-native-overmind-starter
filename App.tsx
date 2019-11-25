import * as React from "react";
import { Text } from "react-native";
import { useOvermind, config } from "./overmind";

const App: React.FunctionComponent = () => {
  const { state, actions, effects, addMutationListener } = useOvermind();

  return (
    <>
      <Text>{state.title}</Text>
      <Text>{state.title}</Text>
      <Text>{state.title}</Text>
      <Text>{state.title}</Text>
    </>
  );
};

export default App;
