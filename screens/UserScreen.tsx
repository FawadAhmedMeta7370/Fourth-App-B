import { FC } from "react"
import { IUserScreen } from "../constants/interface"
import { StyleSheet, Text, View } from "react-native"

const UserScreen : FC<IUserScreen> = () => {
    return ( <View style={styles.container}>
        <Text> This is <Text style={styles.highlight}> User </Text> Screen</Text>
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
        color: 'red',
        textDecorationLine: "underline",
        fontStyle: "italic",
        fontWeight: 'bold'
    }
})

export default UserScreen