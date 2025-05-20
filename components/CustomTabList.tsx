import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { CustomTabButton } from "./CustomTabButton";
import { ToggleMenuButton } from "./ToggleMenuButton";

export function CustomTabList({ state, navigation }: BottomTabBarProps) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	function toggleExpandHandler() {
		setIsExpanded(!isExpanded);
	}

	return (
		<View style={styles.tabList}>
			<CustomTabButton 
				icon="home" 
				isExpanded={isExpanded} 
				index={2}
				isFocused={state.index === 0}
				onPress={() => navigation.navigate('index')}
			>
				Home
			</CustomTabButton>
			<CustomTabButton 
				icon="search" 
				isExpanded={isExpanded} 
				index={1}
				isFocused={state.index === 1}
				onPress={() => navigation.navigate('search')}
			>
				Search
			</CustomTabButton>
			<CustomTabButton 
				icon="settings" 
				isExpanded={isExpanded} 
				index={0}
				isFocused={state.index === 2}
				onPress={() => navigation.navigate('setting')}
			>
				Settings
			</CustomTabButton>
			<ToggleMenuButton onPress={toggleExpandHandler} isExpanded={isExpanded} />
		</View>
	);
}

const styles = StyleSheet.create({
	tabList: {
		bottom: 32,
		right: 32,
		alignItems: "flex-end",
		justifyContent: "flex-end"
	}
});