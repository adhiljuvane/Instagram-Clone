import React from "react";
import { Post } from '../presentation';
import { FlatList, View, Text, ScrollView } from "react-native"
import { Thumbnail } from 'native-base';

class PostFeed extends React.Component {

    _renderPost({ item }) {
        return <Post item={item} />
    }

    _returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                        <Text>Stories</Text>
                        <Text>Watch All</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            paddingTop: 5,
                            paddingBottom: 5
                        }}
                    >
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/women/59.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/women/29.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/men/84.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/women/21.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/men/76.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/women/91.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                        <Thumbnail
                            source={{ uri: "https://randomuser.me/api/portraits/women/18.jpg" }}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                        />
                    </ScrollView>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                    keyExtractor={this._returnKey}
                    renderItem={this._renderPost}
                />
            </View>
        )
    }
}

export default PostFeed;