import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { MainFeed, Login } from './components/screens';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const MainStack = createSwitchNavigator({
    login: Login,
    main: MainFeed
});

const AppContainer = createAppContainer(MainStack);

class InstaClone extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

const instaStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
})

export default InstaClone;
