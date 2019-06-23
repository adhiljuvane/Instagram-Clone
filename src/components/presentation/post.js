import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from '../../config';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            screenWidth: 0,
            screenWidth: 0,
        }
    }

    componentDidMount() {
        this.setState({
            screenWidth: Dimensions.get("window").width,
            screenHeight: Dimensions.get("window").height
        })
    }

    likeToggled = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        console.log("ADSd", this.props.item)
        const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;
        const imageUrl = this.props.item % 2 === 0 ? "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
        return (
            <View style={postStyles.mainView}>
                <View style={postStyles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                        <Image
                            style={postStyles.userIcon}
                            source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" }}
                        />
                        <Text style={{ marginLeft: 10 }}>chchoitoi</Text>
                    </View>
                    <View style={{ marginTop: -20, paddingRight: 10 }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.likeToggled}>
                    <Image
                        style={postStyles.image}
                        source={{ uri: imageUrl }}
                    />
                </TouchableOpacity>
                <View style={postStyles.iconBar}>
                    <Image style={{ height: 40, width: 40, marginLeft: 10, tintColor: heartIconColor }} source={config.images.heartIcon} />
                    <Image style={{ height: 35, width: 35, marginLeft: 10 }} source={config.images.chatIcon} />
                    <Image style={{ height: 35, width: 35, marginLeft: 10 }} source={config.images.downloadIcon} />
                </View>
                <View style={postStyles.commentBar}>
                    <Image source={config.images.heartIcon} style={{ height: 25, width: 25, marginLeft: 10 }} />
                    <Text style={{ marginLeft: 10, fontWeight: "900" }}>12,384 Likes</Text>
                </View>
            </View>
        )
    }
}

const postStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column"
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
    userBar: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: "rgb(255,255,255)",
        justifyContent: "space-between",
        alignItems: "center"
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    image: {
        width: "100%",
        height: 412,
    },
    iconBar: {
        height: 50,
        width: "100%",
        borderColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    commentBar: {
        height: 40,
        width: "100%",
        backgroundColor: "rgb(250,250,250)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(233,233,233)",
        alignItems: "center",
        flexDirection: "row"
    }
})

export default Post;
