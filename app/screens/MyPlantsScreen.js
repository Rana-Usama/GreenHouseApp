import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import PlantsCart from '../components/PlantsCart';

//config
import Colors from '../config/Colors';

function MyPlantsScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {activeButton == '1' ?
                <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(3.1), marginTop: RFPercentage(2.2) }} >
                    My Plants
                </Text>
                :
                <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(3.1), marginTop: RFPercentage(2.2) }} >
                    Plant Info
                </Text>
            }

            {/* buttons */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', height: RFPercentage(6.4), backgroundColor: '#F7F7F7', borderRadius: RFPercentage(20), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(22), height: RFPercentage(5.4), borderRadius: RFPercentage(20), backgroundColor: activeButton == '1' ? Colors.primary : "#F7F7F7" }} >
                    <Text style={{ fontFamily: 'Roboto_400Regular', color: activeButton == '1' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                        My Plants
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: RFPercentage(22), height: RFPercentage(5.4), borderRadius: RFPercentage(20), backgroundColor: activeButton == '2' ? Colors.primary : "#F7F7F7" }} >
                    <Text style={{ fontFamily: 'Roboto_400Regular', color: activeButton == '2' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                        Plant Info
                    </Text>
                </TouchableOpacity>
            </View>

            {activeButton == '1' ?
                // First Button data
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <PlantsCart />
                    </View>
                    <View style={{ marginBottom: RFPercentage(10) }} />
                </ScrollView>
                :
                // Second Button data
                <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                    <View style={{ overflow: 'hidden', width: '45%', justifyContent: 'center', alignItems: 'flex-start' }} >
                        <Image style={{ width: '100%', borderRadius: RFPercentage(2), height: RFPercentage(28) }} source={require('../../assets/images/p1.png')} />
                        <Text style={{ fontFamily: 'Roboto_700Bold', marginTop: RFPercentage(2.5), color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }}>
                            Apple Tree
                        </Text>
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.darkGrey, fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }} >
                            Lorem ipsum djs ais
                        </Text>
                    </View>

                    <View style={{ position: 'absolute', right: 0, overflow: 'hidden', width: '45%', justifyContent: 'center', alignItems: 'flex-start' }} >
                        <Image style={{ width: '100%', borderRadius: RFPercentage(2), height: RFPercentage(28) }} source={require('../../assets/images/p2.png')} />
                        <Text style={{ fontFamily: 'Roboto_700Bold', marginTop: RFPercentage(2.5), color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: 'bold' }}>
                            Apple Tree
                        </Text>
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.darkGrey, fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }} >
                            Lorem ipsum djs ais
                        </Text>
                    </View>
                </View>
            }

            {/* Add Icon */}
            <TouchableOpacity activeOpacity={0.9} style={{ position: 'absolute', right: RFPercentage(4), bottom: RFPercentage(4) }} >
                <Image style={{ width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/plus.png')} />
            </TouchableOpacity>
        </Screen>
    );
}

export default MyPlantsScreen;