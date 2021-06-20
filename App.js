import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (newGoal) => {
		setCourseGoals([...courseGoals, { id: Math.random().toString(), value: newGoal }]);
		setIsAddMode(false);
	};

	const removeGoalHandler = (itemId) => setCourseGoals((currentGoal) => currentGoal.filter((goal) => goal.id !== itemId));

	const cancelGoalAdditionHandler = () => setIsAddMode(false);

	return (
		<View style={styles.container}>
			<Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
			<GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
			<FlatList data={courseGoals} renderItem={(itemData) => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />} keyExtractor={(item, idx) => item.id} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 50,
		paddingHorizontal: 10,
	},
});
