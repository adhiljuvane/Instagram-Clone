import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onLogin = () => {
        this.props.navigation.navigate("main")
    }

    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (
            <TouchableOpacity style={loginStyles.mainView} onPress={() => { this.onLogin() }}>
                <Text>Profile Page</Text>
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

export default Profile;