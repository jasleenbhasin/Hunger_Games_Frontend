import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Alert,
    StyleSheet,
    FlatList,
} from 'react-native';
import Dairy from './Dairy';

class IngredientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            data: this.props.navigation.state.params.data_torender,
            included: false,
        };
    }
    render() {
        return <View>

        </View>;
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        margin: 10,
    },

    TextStyle: {
        fontSize: 25,
        textAlign: 'center',
    },
});

export default IngredientList;
