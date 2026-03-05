import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/todosSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setText("");
  };

  return (
    <View className="flex-row gap-3 px-4 py-3">
      <TextInput
        className="flex-1 rounded-xl border border-charcoal/20 bg-white px-4 text-base text-charcoal"
        style={{ minHeight: 48, textAlignVertical: "center" }}
        placeholder="Add a new task..."
        placeholderTextColor="#3B3B3B80"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <Pressable
        className="items-center justify-center rounded-xl bg-copper px-5 active:opacity-80"
        onPress={handleAdd}
      >
        <Text className="text-base font-semibold text-white">Add</Text>
      </Pressable>
    </View>
  );
}
