import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import List from './screens/mainList';
import Dairy from './screens/Dairy';
import RootStack from './routes/RootStack';

export default function App() {
    return <RootStack />;
}
/*const App = createStackNavigator({
    List: { screen: List, newscreen: Dairy },
    Dairy: { screen: Dairy },
});

export default createAppContainer(App);
 
/*export default function App() {
    return <List />;
}*/
