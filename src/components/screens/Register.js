import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onLogin = () => {
        this.props.navigation.navigate("main")
    }
    render() {
        return (
            <View style={loginStyles.mainView} >
                <Text>Register Page</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
                    placeholder="Username"
                />
                <TextInput
                    style={{ height: 40, width: 200, borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Button title="Register" onPress={() => { this.onLogin() }} />
            </View>
        )
    }
}

const loginStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
    }
})

export default Register;