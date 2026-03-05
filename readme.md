# Kaimate

A simple task manager built with React Native. Add tasks, mark them done, delete them — nothing fancy, just the basics done right.

## Tech Stack

- **Expo SDK 54** — managed workflow, no native build config needed
- **Redux Toolkit** — single `todosSlice` handles all state (add, toggle, delete) with typed hooks
- **NativeWind v4** — Tailwind CSS classes for styling React Native components, with a custom color palette (cream, charcoal, copper)

## Project Structure

```
App.tsx              # Root component, Redux Provider wrapper
index.ts             # Expo entry point
src/
  types/index.ts     # Todo interface
  store/
    index.ts         # Redux store config
    todosSlice.ts    # Todo actions and reducer
    hooks.ts         # Typed useAppDispatch / useAppSelector
  screens/
    HomeScreen.tsx   # Main screen with header and task list
  components/
    TodoInput.tsx    # Text input + Add button
    TodoList.tsx     # FlatList rendering todos
    TodoItem.tsx     # Individual todo row (toggle, delete)
    EmptyState.tsx   # Shown when the list is empty
```

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `i` / `a` to open in a simulator.

## Building for Distribution

EAS Build is configured in `eas.json`. To create a preview APK:

```bash
npx eas build --profile preview --platform android
```
