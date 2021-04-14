import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Chip, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import BinanceList from '../components/BinanceList'

const Portfolio = () => {

  return (
    <>
        <View style={ styles.topContainer }>
            {/* <View style={styles.topBar}> */}
                <Image source={ require('../assets/portfolio.png') } style={styles.image} />
                <Text style={styles.text}> Create Your Portfolio! </Text>
            {/* </View> */}
        </View>
    </>
  );
};

const styles = StyleSheet.create({

    topContainer: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        marginLeft: 30
    },
    topBar: {
        flex: 1
    },
    image: {
        height: 250,
        width: 300,
    },
    text: {
        fontSize: 30,
        marginTop: 40,
        marginLeft: -20,
        fontFamily: 'monospace'
    }
});

export default Portfolio;
