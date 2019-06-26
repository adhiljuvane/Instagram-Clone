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
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" style={{
                    color: tintColor, alignItems: 'center',
                    alignSelf: 'center',
                    height: '100%',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '100%',
                }} />
            ),
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
    Home: feedStackNavigator,
    Camera: Camera,
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
                        style={{ color: focused ? "white" : "black" }}
                    />
                );
            },
        }),
        tabBarOptions: {
            activeBackgroundColor: '#e91e63',
            activeTintColor: '#ffffff',
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
