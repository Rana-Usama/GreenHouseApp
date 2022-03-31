import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function MyPlantsScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(3.1), marginTop: RFPercentage(2.2) }} >
                My Plants
            </Text>

            {/* buttons */}
            <View style={{ marginTop: RFPercentage(2.5), width: '90%', height: RFPercentage(6.4), backgroundColor: '#F7F7F7', borderRadius: RFPercentage(20), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(22), height: RFPercentage(5.4), borderRadius: RFPercentage(20), backgroundColor: activeButton == '1' ? Colors.primary : "#F7F7F7" }} >
                    <Text style={{ color: activeButton == '1' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                        My Plants
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: RFPercentage(22), height: RFPercentage(5.4), borderRadius: RFPercentage(20), backgroundColor: activeButton == '2' ? Colors.primary : "#F7F7F7" }} >
                    <Text style={{ color: activeButton == '2' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                        Plant Info
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: RFPercentage(4), bottom: RFPercentage(4) }} >
                <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
        </Screen>
    );
}

export default MyPlantsScreen;