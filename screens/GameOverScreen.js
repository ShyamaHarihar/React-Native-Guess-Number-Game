import { View, Text, StyleSheet, Alert } from "react-native"
import Title from "../components/Title";
import Colors from '../constants/Colors';
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    console.log(typeof userNumber);
    console.log(userNumber);
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <Text style={styles.summaryText}>
                Your phone needed <Text>{roundsNumber}</Text>{' '}
                rounds to guess the number{' '}
                <Text>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>
                <Title>Start New Game</Title>
            </PrimaryButton>
        </View>);
}
export default GameOverScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
    },
})