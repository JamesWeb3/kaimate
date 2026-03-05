import React from "react";
import { View, Text, Image } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const logo = require("../../assets/kaimate-logo.png");

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-cream">
      <View className="flex-row items-center bg-charcoal pb-4 pt-14 px-4">
        <Image source={logo} className="h-10 w-10 rounded-lg mr-3" />
        <View>
          <Text className="text-2xl font-bold text-cream">Kaimate</Text>
          <Text className="text-sm text-copper">Your simple task manager</Text>
        </View>
      </View>
      <TodoInput />
      <TodoList />
    </View>
  );
}
