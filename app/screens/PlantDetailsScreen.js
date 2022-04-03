import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function PlantDetailsScreen(props) {

    const detailsData = [
        {
            title: 'pH value:',
            value: '6.5-7.5'
        },
        {
            title: 'Nutrient composition:',
            value: 'Mg,U,Fr,Zn'
        },
        {
            title: 'Seed to harvest time:',
            value: '4 weeks'
        },
        {
            title: 'Special requirements:',
            value: 'Shade during summer'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <ImageBackground style={{ width: '100%', height: RFPercentage(45) }} source={require('../../assets/images/plant.png')} >
                <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(3) }} >
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(4.8), height: RFPercentage(4.8) }} source={require('../../assets/images/back.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontFamily: "Roboto_700Bold", color: Colors.black, fontSize: RFPercentage(3.6), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Apple Tree
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* First row */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                            {/* First */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: RFPercentage(24), height: RFPercentage(6.5), borderRadius: RFPercentage(1.5), borderWidth: RFPercentage(0.1), borderColor: Colors.primary, backgroundColor: Colors.white }} >
                                <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5), marginRight: RFPercentage(1.8) }} source={require('../../assets/images/time.png')} />
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.1), fontWeight: 'bold' }} >
                                    6-8 hrs
                                </Text>
                            </View>
                            {/* Second */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, width: RFPercentage(24), height: RFPercentage(6.5), borderRadius: RFPercentage(1.5), borderWidth: RFPercentage(0.1), borderColor: Colors.primary, backgroundColor: Colors.white }} >
                                <Image style={{ width: RFPercentage(2.8), height: RFPercentage(3.5), marginRight: RFPercentage(1.8) }} source={require('../../assets/images/flame.png')} />
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.1), fontWeight: 'bold' }} >
                                    112 lux
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Second row */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                            {/* First */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: RFPercentage(24), height: RFPercentage(6.5), borderRadius: RFPercentage(1.5), borderWidth: RFPercentage(0.1), borderColor: Colors.primary, backgroundColor: Colors.white }} >
                                <Image style={{ width: RFPercentage(2), height: RFPercentage(2.8), marginRight: RFPercentage(1.8) }} source={require('../../assets/images/drop.png')} />
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.1), fontWeight: 'bold' }} >
                                    3 liter
                                </Text>
                            </View>
                            {/* Second */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, width: RFPercentage(24), height: RFPercentage(6.5), borderRadius: RFPercentage(1.5), borderWidth: RFPercentage(0.1), borderColor: Colors.primary, backgroundColor: Colors.white }} >
                                <Image style={{ width: RFPercentage(1.4), height: RFPercentage(3), marginRight: RFPercentage(1.8) }} source={require('../../assets/images/temp.png')} />
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.1), fontWeight: 'bold' }} >
                                    20-25 C
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Deatils */}
                    {detailsData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(4) : RFPercentage(3.5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                                {item.title}
                            </Text>
                            <Text style={{ marginLeft: RFPercentage(0.5), color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: 'bold' }} >
                                {item.value}
                            </Text>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </Screen>
    );
}

export default PlantDetailsScreen;