import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { MainFeed, Login, Camera, Profile, Register } from './components/screens';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
}, {
        tabBarOptions: {
            activeBackgroundColor: '#e91e63',
            activeTintColor: '#ffffff',
            labelStyle: {
                fontSize: 15,
                textAlign: 'center',
            },
            tabStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 15
            }
        }
    }
)


const IntroStack = createStackNavigator({
    login: Login,
    register: Register
})

const MainStack = createSwitchNavigator({
    login: IntroStack,
    main: Tabs
});

const AppContainer = createAppContainer(MainStack)

class InstaClone extends Component {
    render() {
        return (
            <View style={instaStyles.mainView}>
                <AppContainer />
            </View>
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

export default (InstaClone);
