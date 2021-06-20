import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const GoalItem = (props) => {
	return (
		<TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#a1a1a1',
		borderColor: '#acc',
		borderWidth: 1,
	},
});
