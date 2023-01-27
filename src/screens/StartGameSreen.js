import React, { useState } from "react"
import {
    Button,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native"
import Card from "../components/Card"
import colors from "../constants/colors"
import Input from "../components/Input"

const StartGameScreen = ({onStartGame}) => {
    const [value, setValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState("")

    const handleConfirmation = () => {
        const newValue = parseInt(value)
        if (newValue === NaN || newValue <= 0 || newValue > 99) return
    
        setConfirmed(true)
        setSelectedNumber(newValue)
        setValue("")
    }

    const handleInput = text => {
        setValue(text.replace(/[^0-9]/g, ""))
    }

    const handleResetInput = () => {
        setValue("")
        setConfirmed(false)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <ScrollView style={{ backgroundColor: colors.primary }}>
                <TouchableWithoutFeedback onPress= {() =>Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Start Game</Text>
                        <Card>
                        <Text style={styles.subtitle}>Choose a Number</Text>
                        <Input
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            KeyboardType="numeric"
                            maxLength={2}
                            value={value}
                            onChangeText={handleInput}
                        />
                    <View style={styles.buttonContainer}>
                        <View style={styles.cleanButton}>
                            <Button
                                title="Clean"
                                onPress={handleResetInput}
                                color={"#272638"}
                            />  
                        </View>
                            <View style={styles.confirmButton}>
                                <Button
                                    title="Confirm"
                                    onPress={handleConfirmation}
                                    color={"#FD5820"}
                                /> 
                            </View> 
                    </View>
                        </Card>
                        {confirmed && (
                            <Card newStyles={styles.selectedCard}>
                                <Text style={{ color: "white" }}>Your number is:</Text>
                                <Text style={styles.selectedNumber}>{selectedNumber}</Text>
                                <View style={styles.confirmStyle}>
                                    <Button
                                        title="Start"
                                        color={"#FD5820"}
                                        onPress={() => onStartGame(selectedNumber)}
                                    />
                                </View>
                            </Card>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "white",
    },
    subtitle: {
        color: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    cleanButton: {
        width: 100,
        backgroundColor: colors.disableColor,
        borderRadius: 10,
    },
    confirmButton: {
        width: 100,
        backgroundColor: colors.actionColor,
        borderRadius: 10,
    },
    selectedCard: {
        marginTop: 50,
        width: "50%",
    },
    selectedNumber: {
        color: "white",
        marginVertical: 20,
        fontSize: 35,
      },
})