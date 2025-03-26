import { View, Text, StyleSheet, Alert, FlatList } from "react-native"
import { useState, useEffect, useMemo } from "react";
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import GuessLogItem from "../components/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initalGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initalGuess);
    const [guessRounds, setGuessRounds] = useState([]);
    useEffect(() => {
        if (currentGuess === Number(userNumber)) {
            console.log('true');
            onGameOver(guessRounds.length);
        }
        //console.log(currentGuess, userNumber);
        //console.log(typeof currentGuess, typeof userNumber)
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
        console.log('use effect triggered')
    }, []);
    function nextGuessHandler(direction) {
        //direction => 'lower' or 'higher'
        //You already guessed lower than user number and you are going further lower
        if ((direction === 'lower' && currentGuess < Number(userNumber)) || (direction === 'greater' && currentGuess > Number(userNumber))) {
            Alert.alert('Wrong', 'You know this is a wrong guess', [{ text: 'Sorry', style: 'cancel' },]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newrandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newrandomNumber);
        setGuessRounds(prevGuessRounds => [newrandomNumber, ...prevGuessRounds]);
        //console.log(minBoundary, maxBoundary, currentGuess, userNumber);

    }
    const guessRoundsListLength = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower ?</InstructionText>
                <View style={styles.buttonscontainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            {/* <View>LOG ROUNDS</View> */}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>)

}
export default GameScreen
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonscontainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
})