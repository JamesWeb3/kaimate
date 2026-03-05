import React from "react";
import { View, Text, Image } from "react-native";

const logo = require("../../assets/kaimate-logo.png");

export default function EmptyState() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={logo} className="h-24 w-24 mb-4 opacity-40" />
      <Text className="text-lg text-charcoal/50">No tasks yet</Text>
      <Text className="mt-1 text-sm text-charcoal/30">
        Add one above to get started
      </Text>
    </View>
  );
}
