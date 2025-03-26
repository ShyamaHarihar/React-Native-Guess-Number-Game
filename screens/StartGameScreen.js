import PrimaryButton from "../components/PrimaryButton"
import { View, TextInput, Alert, Text } from 'react-native'
import { StyleSheet } from "react-native";
import { useState } from 'react';
import Colors from '../constants/Colors';
import InstructionText from "../components/InstructionText";
function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                'Invalid Number !',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )//Native alert element
            //reset invalid input
            return;
        }
        //forward the number
        onPickNumber(enteredNumber);
    }
    return (
        <View style={styles.inputContainer}>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
                maxLength={2}
                style={styles.numberInput}
                autoCapitalize="none"
                onChangeText={numberInputHandler}
                value={enteredNumber}
                keyboardType='number-pad' />
            <View style={styles.buttonscontainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={resetInputHandler}
                    >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;
const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',//default is stretch
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: Colors.primary700
    },
    instructionText: {
        color: 'white',
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 22,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 8,
        color: Colors.accent500,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonscontainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});