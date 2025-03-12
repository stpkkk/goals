import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({ onAddGoal, visible, onCancel }) {
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
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Your goal'
					onChangeText={goalInputHandle}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add goal' onPress={addGoalHandler} color='#b180f0' />
					</View>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} color='#f31282' />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
		padding: 16,
		backgroundColor: '#311b6b',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	button: {
		width: 100,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
})
