/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createOvermind } from "overmind";
import { config } from "./overmind";
import { Provider } from "overmind-react";

const MyApp = function() {
  return (
    <Provider value={overmind}>
      <App></App>
    </Provider>
  );
};

const overmind = createOvermind(config, { devtools: true });

AppRegistry.registerComponent(appName, () => MyApp);
