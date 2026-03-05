import React from "react";
import { FlatList } from "react-native";
import { useAppSelector } from "../store/hooks";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.items);

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
      ListEmptyComponent={EmptyState}
      contentContainerStyle={todos.length === 0 ? { flex: 1 } : { paddingBottom: 20 }}
    />
  );
}
