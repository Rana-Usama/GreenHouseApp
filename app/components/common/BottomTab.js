import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../../assets/images/home.png')} />
                    <Text style={{ color: '#444444', fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.6) }} >
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ScheduleScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../../assets/images/sche.png')} />
                    <Text style={{ color: '#444444', fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.6) }} >
                        Schedule
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("MyPlantsScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../../assets/images/pla.png')} />
                    <Text style={{ color: '#444444', fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.6) }} >
                        Plants
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3), height: RFPercentage(3.5) }} source={require('../../../assets/images/pro.png')} />
                    <Text style={{ color: '#444444', fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.6) }} >
                        Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;