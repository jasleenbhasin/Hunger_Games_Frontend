import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
    Button,
} from 'react-native';

const DATA = [
    {
        title: 'Dairy',
        id: '1',
        imageurl:
            'https://img.favpng.com/19/5/15/milk-substitute-dairy-products-food-png-favpng-vmYbiv194gvXhahbHGiGi7L16.jpg',
    },
    {
        title: 'Spices',
        id: '2',
        imageurl:
            'https://banner2.cleanpng.com/20180705/eps/kisspng-ras-el-hanout-indian-cuisine-vegetarian-cuisine-sp-spices-5b3ea3b8e1a8f4.3757129615308318009243.jpg',
    },
    { title: 'Breads', id: '3', imageurl: '../assets/dairy.png' },
    { title: 'Flour', id: '4', imageurl: '../assets/dairy.png' },
    { title: 'Fruits', id: '5', imageurl: '../assets/dairy.png' },
    { title: 'Vegetables', id: '6', imageurl: '../assets/dairy.png' },
    {
        title: 'Animal Products',
        id: '7',
        imageurl: '../assets/dairy.png',
    },
    { title: 'Liquids', id: '8', imageurl: '../assets/dairy.png' },
];

class List extends React.Component {
    navigate_to(category) {
        this.props.navigation.navigate(category);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.navigate_to(item.title)}
                            >
                                <View style={styles.itemView}>
                                    <View style={styles.imagecontainer}>
                                        <Image
                                            source={{ uri: item.imageurl }}
                                            style={styles.imgstyle}
                                        />
                                    </View>
                                    <View style={styles.iteminfo}>
                                        <Text style={styles.name}>
                                            {' '}
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                <Button
                    onPress={() =>
                        this.props.navigation.navigate('IngredientList')
                    }
                    title="GO TO INGREDIENT LIST"
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        alignContent: 'center',
        marginLeft: -30,
        color: 'black',
    },
    imgstyle: {
        width: 50,
        height: 50,
        padding: 5,
        marginBottom: 20,
    },
    itemView: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomWidth: 1.5,
    },
    imagecontainer: {
        flex: 0,
        width: 70,
        height: 70,
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    iteminfo: {
        padding: 20,
        textDecorationColor: 'white',
        marginLeft: 5,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
    text: {
        color: 'white',
    },
});

export default List;
