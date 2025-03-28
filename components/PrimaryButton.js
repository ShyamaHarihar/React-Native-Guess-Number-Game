import { View, Text, Pressable } from 'react-native'
import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.outercontainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.container, styles.pressed]
                        : styles.container}
                android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}
export default PrimaryButton
const styles = StyleSheet.create({
    outercontainer: {
        //flexDirection: 'column',
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
});