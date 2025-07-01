# Custom Tabs with Expo Router UI

This project demonstrates how to implement custom tabs in an Expo app using Expo Router UI, following the approach from the [Expo blog post](https://expo.dev/blog/how-to-build-custom-tabs-with-expo-router-ui).

## Demo

<Video src="https://github.com/user-attachments/assets/dafdb1a2-96ab-4ec2-afac-7aa582013657" controls width="600" ></Video>

## Features

- Custom tab bar with blur effect
- Animated tab transitions
- Dark/Light mode support
- Type-safe navigation
- Modern UI with smooth animations

## Project Structure

```
app/
├── _layout.tsx        # Main tab navigation layout
├── index.tsx          # Home screen
├── search.tsx         # Search screen
├── settings.tsx       # Settings screen
components/
├── CustomTabBar.tsx   # Custom tab bar implementation
└── CustomTabList.tsx  # Custom tab list component
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## Implementation Details

The project uses the new `expo-router/ui` package to implement custom tabs. Key components:

- `Tabs`: The main tab container
- `TabList`: Custom tab list component
- `TabTrigger`: Individual tab buttons
- `TabSlot`: Content slot for tab screens

### Custom Tab Bar

The custom tab bar features:
- Blur effect background using `expo-blur`
- Animated transitions with `react-native-reanimated`
- Proper safe area handling
- Haptic feedback
- Dark/light mode support

## Dependencies

- expo-router
- expo-blur
- react-native-reanimated
- @react-navigation/native
- expo-router/ui

## Development

This project uses:
- TypeScript for type safety
- Expo Router for navigation
- React Native Reanimated for animations
- Expo Blur for visual effects

## License

MIT
