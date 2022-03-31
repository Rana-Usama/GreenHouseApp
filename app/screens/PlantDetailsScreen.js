import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

function PlantDetailsScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(45) }} source={require('../../assets/images/plant.png')} >

                <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(4.8), height: RFPercentage(4.8) }} source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </Screen>
    );
}

export default PlantDetailsScreen;