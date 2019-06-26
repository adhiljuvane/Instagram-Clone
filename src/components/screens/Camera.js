import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import config from "../../config";

class Camera extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'Camera',
        header: null,
    };

    onLogin = () => {
        this.props.navigation.navigate("main")
    }
    render() {
        return (
            <TouchableOpacity style={loginStyles.mainView} onPress={() => { this.onLogin() }}>
                <Text>Camera Page</Text>
            </TouchableOpacity>
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

export default Camera;