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
            headerLeft: <Icon name="camera" style={{ paddingLeft: 10, color: '#d1cece' }} />,
            headerTitle: "Instagram",
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerRight: <Icon ios="ios-send-outline" android="md-chatboxes" style={{ paddingRight: 10, color: '#d1cece' }} />
        }
    }
})

const cameraStackNavigator = createStackNavigator({
    Activity: {
        screen: Camera,
        navigationOptions: {
            headerLeft: <Icon name="camera" style={{ paddingLeft: 10, color: '#d1cece' }} />,
            headerTitle: "Instagram",
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerRight: <Icon ios="ios-send-outline" android="md-chatboxes" style={{ paddingRight: 10, color: '#d1cece' }} />
        }
    }
})

const profileStackNavigator = createStackNavigator({
    Activity: {
        screen: Profile,
        navigationOptions: {
            headerLeft: <Icon ios="ios-camera-outline" android="md-camera" style={{ paddingLeft: 10, color: '#d1cece' }} />,
            headerTitle: "Instagram",
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerRight: <Icon ios="ios-send-outline" android="md-chatboxes" style={{ paddingRight: 10, color: '#d1cece' }} />
        }
    }
})

const Tabs = createBottomTabNavigator({
    Home: feedStackNavigator,
    Camera: cameraStackNavigator,
    Profile: profileStackNavigator
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = 'ios-home';
                        break;
                    case 'Camera':
                        iconName = 'ios-camera';
                        break;
                    default:
                        iconName = 'ios-heart';
                        break;
                }
                return (
                    <Icon
                        size={22}
                        name={iconName}
                        style={{ color: focused ? "#000" : "#d1cece" }}
                    />
                );
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000000',
            inactiveTintColor: '#d1cece',
            showIcon: true,
            showLabel: false
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
