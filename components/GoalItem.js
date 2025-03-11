import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function GoalItem({ item, onDeleteItem }) {
	const { id, text } = item

	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#2100644' }}
				onPress={() => onDeleteItem(id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: 'white',
		padding: 8,
	},
})
