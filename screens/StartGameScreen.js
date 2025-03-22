import PrimaryButton from "../components/PrimaryButton"
import { View, TextInput, Pressable } from 'react-native'
import { StyleSheet } from "react-native";
function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                maxLength={2}
                style={styles.numberInput}
                autoCapitalize="none"
                keyboardType='number-pad' />
            <View style={styles.buttonscontainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#4e0329'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 22,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        color: '#ddb52f',
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