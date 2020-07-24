import React from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Head = () => {
    return (
        <Header
            style={styles.head}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{
                text: 'CHOOSE YOUR INGREDIENTS',
                style: { color: '#fff', fontSize: 17 },
            }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
};

const styles = StyleSheet.create({
    head: {},
});
export default Head;
