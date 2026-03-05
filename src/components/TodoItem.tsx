import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAppDispatch } from "../store/hooks";
import { toggleTodo, deleteTodo } from "../store/todosSlice";
import { Todo } from "../types";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();

  return (
    <View className="mx-4 mb-2 flex-row items-center rounded-xl bg-white p-4 shadow-sm">
      <Pressable
        className="mr-3 h-6 w-6 items-center justify-center rounded-full border-2"
        style={
          todo.completed
            ? { backgroundColor: "#D47B32", borderColor: "#D47B32" }
            : { borderColor: "#3B3B3B40" }
        }
        onPress={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.completed && <Text className="text-xs text-white">✓</Text>}
      </Pressable>

      <Text
        className={`flex-1 text-base ${
          todo.completed ? "text-charcoal/40 line-through" : "text-charcoal"
        }`}
      >
        {todo.text}
      </Text>

      <Pressable
        className="ml-3 rounded-lg px-3 py-1 active:opacity-60"
        onPress={() => dispatch(deleteTodo(todo.id))}
      >
        <Text className="text-sm text-copper">Delete</Text>
      </Pressable>
    </View>
  );
}
