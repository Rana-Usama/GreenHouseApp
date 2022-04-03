import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ProfileScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            {/* Nav */}
            <ImageBackground style={{ width: '100%', height: RFPercentage(24) }} source={require('../../assets/images/top.png')} >
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.7} style={{ position: 'absolute', top: RFPercentage(4), left: RFPercentage(3) }} >
                    <Entypo name="chevron-small-left" style={{ fontSize: RFPercentage(4) }} color={Colors.white} />
                </TouchableOpacity>
                <View style={{ width: '100%', height: RFPercentage(4), borderTopLeftRadius: RFPercentage(6), borderTopRightRadius: RFPercentage(6), backgroundColor: Colors.white, position: 'absolute', bottom: 0 }} />
            </ImageBackground>

            {/* Profile image */}
            <TouchableOpacity activeOpacity={0.9} >
                <Image style={{ marginTop: RFPercentage(-15), width: RFPercentage(22), height: RFPercentage(22) }} source={require('../../assets/images/profile.png')} />
            </TouchableOpacity>

            <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: 'bold', marginTop: RFPercentage(2) }}>
                Jhon Wick
            </Text>

            {/* Details Box */}
            <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(25), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(2) }} >

                <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: 'bold' }} >
                        Email
                    </Text>
                    <Text style={{ fontFamily: 'Roboto_500Medium', color: Colors.darkGrey, fontSize: RFPercentage(1.9), position: 'absolute', right: 0 }} >
                        amongus@example.com
                    </Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} />

                <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: 'bold' }} >
                        Wi-Fi ID
                    </Text>
                    <Text style={{ fontFamily: 'Roboto_500Medium', color: Colors.darkGrey, fontSize: RFPercentage(1.9), position: 'absolute', right: 0 }} >
                        123jdsfis
                    </Text>
                </View>
                <View style={{ marginTop: RFPercentage(2), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} />

                <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                    <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: 'bold' }} >
                        Wi-Fi Config
                    </Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0 }} >
                        <Entypo name="chevron-small-right" style={{ fontSize: RFPercentage(3.6) }} color={Colors.darkGrey} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(4), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Restart Device"
                    // onPress={() => props.navigation.navigate("NewPasswordScreen")}
                    gradient={true}
                    icon={true}
                    iconName={'restart'}
                    iconColor={Colors.white}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    bold={false}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
                <View style={{ marginTop: RFPercentage(2) }} />
                <MyAppButton
                    title="Log out"
                    icon={true}
                    iconName={'logout-variant'}
                    iconColor={Colors.red}
                    // onPress={() => props.navigation.navigate("LoginScreen")}
                    backgroundColor={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    borderWidth={RFPercentage(0.1)}
                    bold={false}
                    fontSize={RFPercentage(2.2)}
                    borderColor={Colors.grey}
                    color={Colors.red}
                    width={"90%"}
                />
            </View>

            {/* Bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default ProfileScreen;