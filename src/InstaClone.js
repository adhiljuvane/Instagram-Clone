import React, { Component } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { MainFeed, Login, Camera, Profile, Register } from './components/screens';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import config from './config';


const feedStackNavigator = createStackNavigator({
    Activity: {
        screen: MainFeed,
        navigationOptions: {
            headerLeft: <Icon name="camera" style={{ paddingLeft: 10, }} />,
            headerTitle: "Instagram",
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerRight: <Icon ios="ios-send-outline" android="md-chatboxes" style={{ paddingRight: 10, }} />
        }
    }
})

const profileStackNavigator = createStackNavigator({
    Activity: {
        screen: Profile,
        navigationOptions: {
            headerLeft: <Icon ios="ios-camera-outline" android="md-camera" style={{ paddingLeft: 10, }} />,
            headerTitle: "Instagram",
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerRight: <Icon ios="ios-send-outline" android="md-chatboxes" style={{ paddingRight: 10, }} />
        }
    }
})

const Tabs = createBottomTabNavigator({
    feed: feedStackNavigator,
    camera: Camera,
    profile: profileStackNavigator
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
