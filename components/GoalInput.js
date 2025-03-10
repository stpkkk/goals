import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({ onAddGoal }) {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	function goalInputHandle(enteredText) {
		setEnteredGoalText(enteredText)
	}

	function addGoalHandler() {
		if (!enteredGoalText) return

		onAddGoal(enteredGoalText)
		setEnteredGoalText('')
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='Your goal'
				onChangeText={goalInputHandle}
				value={enteredGoalText}
			/>
			<Button title='Add goal' onPress={addGoalHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 8,
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '80%',
		padding: 8,
	},
})
