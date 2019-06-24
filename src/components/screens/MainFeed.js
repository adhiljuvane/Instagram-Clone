import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { PostFeed } from '../container';

class MainFeed extends Component {
    render() {
        return (
            <View style={instaStyles.mainView}>
                <View style={instaStyles.tempNavBar}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
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
    tempNavBar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 75,
        backgroundColor: "rgb(250,250,250)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(233,233,233)",
    },
})

export default MainFeed;
