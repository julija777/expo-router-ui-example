import { CustomTabList } from "@/components/CustomTabList";
import { Tabs } from 'expo-router';
import * as React from "react";
import { StyleSheet } from "react-native";

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					display: "flex"
				},
			}}
			tabBar={(props) => <CustomTabList {...props} />}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: 'Search',
				}}
			/>
			<Tabs.Screen
				name="setting"
				options={{
					title: 'Settings',
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabList: {
		display: "none"
	}
});