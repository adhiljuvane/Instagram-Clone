import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { Button, Icon } from 'native-base';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var images = [
    require('../../../assets/img1.jpg'),
    require('../../../assets/img3.jpg'),
    require('../../../assets/img4.jpg'),
    require('../../../assets/img5.jpg'),
    require('../../../assets/img6.jpg'),
    { uri: "file:///storage/emulated/0/Pictures/1561753725376.jpg" }
]

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    static navigationOptions = {
        title: 'Profile',
    };

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }, { marginBottom: 2 }]}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={image} />
                </View>
            )
        })
    }

    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.renderSectionOne()}
                </View>
            )
        }
        if (this.state.activeIndex == 1) {
            return (
                <ScrollView style={{ flexDirection: 'column', paddingHorizontal: 5 }}>
                    {images.map((image, index) => {
                        return (
                            <View key={index} style={[{ width: (width) }, { marginBottom: 2 }]}>
                                <Image source={image} style={{ width: (width), height: 412 }} />
                            </View>
                        )
                    })}
                </ScrollView>
            )
        }
    }

    render() {
        return (
            <View style={loginStyles.mainView}>
                <View style={loginStyles.firstView}>
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
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
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
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10 }}>
                    <Text>Emma watson</Text>
                    <Text>Actor | Feminist | Beautiful</Text>
                    <Text>www.emmawatson.com</Text>
                </View>
                <View style={{ flex: 5, flexDirection: 'column' }}>
                    <View style={loginStyles.viewList}>
                        <Button
                            transparent
                            onPress={() => this.segmentClicked(0)}
                            active={this.state.activeIndex === 0}
                        >
                            <Icon name="ios-apps" style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.segmentClicked(1)}
                            active={this.state.activeIndex === 1}
                        >
                            <Icon name="ios-list" style={[this.state.activeIndex == 1 ? {} : { color: 'grey' }]} />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.segmentClicked(2)}
                            active={this.state.activeIndex === 2}
                        >
                            <Icon name="ios-people" style={[this.state.activeIndex == 2 ? {} : { color: 'grey' }]} />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.segmentClicked(3)}
                            active={this.state.activeIndex === 3}
                        >
                            <Icon name="ios-bookmark" style={[this.state.activeIndex == 3 ? {} : { color: 'grey' }]} />
                        </Button>
                    </View>
                    {this.renderSection()}
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
        flexDirection: 'column',
    },
    firstView: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        flexDirection: 'row',
        padding: 10,
    },
    viewList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        height: 50,
        borderColor: '#eae5e5',
    }
})

export default Profile;