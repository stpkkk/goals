import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [goals, setGoals] = useState([])

	function addGoalHandler(enteredGoalTextState) {
		setGoals(prev => [
			...prev,
			{ text: enteredGoalTextState, id: Math.random().toString() },
		])
	}

	function deleteGoalHandler(id) {
		setGoals(goals.filter(goal => goal.id !== id))
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={itemData => {
						return (
							<GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
						)
					}}
					keyExtractor={(item, index) => {
						return item.id
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
})
