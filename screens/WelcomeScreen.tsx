import { FC } from "react"
import { IWelcomeScreen } from "../constants/interface"
import { StyleSheet, Text, View } from "react-native"

const WelcomeScreen : FC<IWelcomeScreen> = () => {
    return ( <View style={styles.container}>
        <Text> This is <Text style={styles.highlight}> Welcome </Text> Screen</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 5,
        borderRadius: 25,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlight:{
        color: 'blue',
        textDecorationLine: "underline",
        fontStyle: "italic",
        fontWeight: 'bold'
    }
})

export default WelcomeScreen