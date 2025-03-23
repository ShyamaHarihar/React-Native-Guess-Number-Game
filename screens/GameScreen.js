import { View, Text, StyleSheet } from "react-native"
import Colors from '../constants/Colors';
function GameScreen() {
    return (
        <View style={styles.screen}>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>LOG ROUNDS</View>
        </View>)

}
export default GameScreen
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        //borderWidth: 2,
        padding: 12
    }
})