import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, PermissionsAndroid, Alert } from "react-native";
import config from "../../config";
import { CameraKitCameraScreen, CameraKitCamera } from 'react-native-camera-kit';

class Camera extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPermitted: true
        }
        async function requestCameraPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA, {
                        'title': 'instaClone App Camera Permission',
                        'message': 'instaClone App needs access to your camera ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    requestExternalWritePermission();
                } else {
                    alert("CAMERA permission denied");
                }
            } catch (err) {
                alert("Camera permission err", err);
                console.warn(err)
                throw err;
            }
        }

        async function requestExternalWritePermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                        'title': 'instaClone App External Storage Write Permission',
                        'message': 'instaclone App needs access to Storage data in your SD Card ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    requestExternalReadPermission();
                } else {
                    alert("WRITE_EXTERNAL_STORAGE permission denied");
                }
            } catch (err) {
                alert("Write permission err", err);
                console.warn(err)
                throw err;
            }
        }

        var that = this;
        async function requestExternalReadPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                        'title': 'instaClone App Read Storage Write Permission',
                        'message': 'instaClone App needs access to your SD Card ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    that.setState({ isPermitted: true })
                } else {
                    alert("READ_EXTERNAL_STORAGE permission denied");
                }
            } catch (err) {
                alert("Read permission err", err);
                console.warn(err)
                throw err;
            }
        }
        requestCameraPermission();
    }

    onBottomButtonPressed(event) {
        const captureImages = JSON.stringify(event.captureImages);
        Alert.alert(
            event.type,
            captureImages,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
        );
    }

    static navigationOptions = {
        title: 'Camera',
        header: null,
    };

    onLogin = () => {
        this.props.navigation.navigate("main")
    }
    render() {
        if (this.state.isPermitted) {
            return (
                <CameraKitCameraScreen
                    actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                    onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
                    flashImages={{
                        on: require('../../../assets/flash.png'),
                        off: require('../../../assets/flash-off.png'),
                        auto: require('../../../assets/auto-flash.png'),
                    }}
                    cameraFlipImage={require('../../../assets/rotate.png')}
                    captureButtonImage={require('../../../assets/photo-camera.png')}
                />
            );
        } else {
            return (
                <TouchableOpacity style={loginStyles.mainView} onPress={() => { this.onLogin() }}>
                    <Text>Camera Page</Text>
                </TouchableOpacity>)
        }
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

export default Camera;