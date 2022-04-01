import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

function HomeScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight: 'bold' }} >
                    Welcome Back
                </Text>
                <Text style={{ color: Colors.red, fontSize: RFPercentage(2.5), fontWeight: 'bold' }} >
                    ,Jhon
                </Text>
                <View style={{ position: 'absolute', right: 0, backgroundColor: Colors.white, width: RFPercentage(7), height: RFPercentage(7), borderColor: Colors.primary, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(30) }} >
                    <Image style={{ width: RFPercentage(6.2), height: RFPercentage(6.2) }} source={require('../../assets/images/profile.png')} />
                </View>
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(6), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%' }} >
                <View style={{ width: '60%', height: RFPercentage(6), backgroundColor: '#F7F7F7', borderRadius: RFPercentage(20), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: RFPercentage(5), borderRadius: RFPercentage(20), backgroundColor: activeButton == '1' ? Colors.primary : "#F7F7F7" }} >
                        <Text style={{ color: activeButton == '1' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            System 1
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: '45%', height: RFPercentage(5), borderRadius: RFPercentage(20), backgroundColor: activeButton == '2' ? Colors.primary : "#F7F7F7" }} >
                        <Text style={{ color: activeButton == '2' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            System 2
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Screen>
    );
}

export default HomeScreen;