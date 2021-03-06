import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    Dimensions,
    Button,
} from 'react-native';

import { Icon, CheckBox } from 'react-native-elements';

import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
    { title: 'Milk', id: 1 },
    { title: 'Butter', id: 2 },
    { title: 'Curd', id: 3 },
    { title: 'Yogurt', id: 4 },
    { title: 'Cream', id: 5 },
    { title: 'Mozzarella Cheese', id: 6 },
    { title: 'Cottage Cheese', id: 7 },
    { title: 'Feta Cheese', id: 8 },
    { title: 'Khoya', id: 9 },
    { title: 'Rabri', id: 10 },
];

class Dairy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            included: false,
        };
    }
    state = {
        checked: false,
    };

    change(value) {
        this.props.navigation.state.params.adds(value);
    }

    rem(value) {
        this.props.navigation.state.params.dels(value);
    }

    checkItem = (checkbox) => {
        // console.log(checkbox);
        const { checked } = this.state;
        if (!checked.includes(checkbox)) {
            this.setState({ checked: checked.concat([checkbox]) });
            //var number = checkbox.toString();
            //this.props.changed(number);
        } else {
            this.setState({ checked: checked.filter((a) => a !== checkbox) });
            //var number = checkbox.toString();
            // this.props.deleted(number);
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity>
                                <View style={styles.itemView}>
                                    <View style={styles.imagecontainer}>
                                        <Image
                                            source={{
                                                uri:
                                                    'https://i.imgur.com/HLXryqV.png',
                                            }}
                                            style={styles.imgstyle}
                                        />
                                    </View>
                                    <View style={styles.iteminfo}>
                                        <Text style={styles.name}>
                                            {' '}
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View style={styles.chkbox}>
                                        <CheckBox
                                            containerStyle={{
                                                backgroundColor: 'transparent',
                                                borderWidth: 0,
                                            }}
                                            right
                                            checkedIcon="check-square"
                                            uncheckedIcon="check-square"
                                            checkedColor="green"
                                            iconRight
                                            onPress={() => {
                                                this.checkItem(item.title);
                                            }}
                                            checked={this.state.checked.includes(
                                                item.title
                                            )}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                <Button
                    title="ADD TO MY INGREDIENT LIST"
                    onPress={() =>
                        this.props.navigation.navigate('IngredientList', {
                            data_torender: this.props.checked,
                        })
                    }
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chkbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

        marginTop: 15,
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

export default Dairy;
