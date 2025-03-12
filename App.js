import { useState } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [goals, setGoals] = useState([])
	const [modalIsVisible, setModalIsVisible] = useState(false)

	function startAddGoalHandler() {
		setModalIsVisible(true)
	}

	function endAddGoalHandler() {
		setModalIsVisible(false)
	}

	function addGoalHandler(enteredGoalTextState) {
		setGoals(prev => [
			...prev,
			{ text: enteredGoalTextState, id: Math.random().toString() },
		])
		endAddGoalHandler()
	}

	function deleteGoalHandler(id) {
		setGoals(goals.filter(goal => goal.id !== id))
	}

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='#a065ec'
					onPress={startAddGoalHandler}
				/>

				<GoalInput
					onAddGoal={addGoalHandler}
					visible={modalIsVisible}
					onCancel={endAddGoalHandler}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={itemData => {
							return (
								<GoalItem
									item={itemData.item}
									onDeleteItem={deleteGoalHandler}
								/>
							)
						}}
						keyExtractor={(item, index) => {
							return item.id
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 70,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
})
