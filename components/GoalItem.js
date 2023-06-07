import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#BEB9B5' }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#74828F",
    },
    goalText: {
        margin: 5,
        padding: 1,
        color: "white",
    },
    pressedItem: {
        color: '#BEB9B5',
        opacity: 0.5,
    },
});

export default GoalItem;