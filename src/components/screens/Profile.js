import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button, Icon } from 'native-base';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (
            <View style={loginStyles.mainView}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: "https://randomuser.me/api/portraits/women/21.jpg" }}
                        style={{ width: 75, height: 75, borderRadius: 37.5 }}
                    />
                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>20</Text>
                            <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>206</Text>
                            <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text>167</Text>
                            <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                        </View>
                    </View>
                    <View>
                        <Button bordered dark transparent
                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30, }}
                        >
                            <Text>Edit Profile</Text>
                        </Button>
                        <Button bordered dark transparent
                            style={{ flex: 1, marginLeft: 5, marginRight: 10, height: 30, justifyContent: 'center', height: 30, }}
                        >
                            <Icon name="settings" />
                        </Button>
                    </View>
                </View>
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
        flexDirection: 'row',
        padding: 10,
    }
})

export default Profile;