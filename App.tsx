import "./global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <HomeScreen />
    </Provider>
  );
}
