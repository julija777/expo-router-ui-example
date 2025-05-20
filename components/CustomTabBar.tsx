import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import { Colors } from '@/constants/Colors';
import { IconSymbol } from './ui/IconSymbol';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const activeIndex = useSharedValue(state.index);

  useEffect(() => {
    activeIndex.value = withSpring(state.index);
  }, [state.index]);

  const tabBarStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(0) }],
    };
  });

  return (
    <Animated.View style={[styles.container, tabBarStyle]}>
      <AnimatedBlurView
        intensity={80}
        tint={colorScheme === 'dark' ? 'dark' : 'light'}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const isActive = state.index === index;
          const color = isActive
            ? Colors[colorScheme ?? 'light'].tint
            : Colors[colorScheme ?? 'light'].tabIconDefault;

          const iconName = route.name === 'index' ? 'house.fill' : 'paperplane.fill';

          return (
            <Pressable
              key={route.key}
              onPress={() => {
                router.push(route.name);
              }}
              style={({ pressed }) => [
                styles.tab,
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}>
              <IconSymbol size={28} name={iconName} color={color} />
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 88,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingVertical: 10,
  },
}); 