import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function NewPlantScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', left: RFPercentage(2), top: RFPercentage(3) }} >
                <Entypo name="chevron-small-left" style={{ fontSize: RFPercentage(4.5) }} color={Colors.black} />
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(4.5), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(4), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    New Plant
                </Text>
                <Text style={{ marginTop: RFPercentage(2.8), fontSize: RFPercentage(1.9) }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cras ut praesent ligula urna nisl.
                </Text>
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(6), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Save"
                    padding={RFPercentage(1.6)}
                    onPress={() => handleConfirm()}
                    backgroundColor={Colors.primary}
                    borderWidth={RFPercentage(0.1)}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    bold={false}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
                <View style={{ marginTop: RFPercentage(2) }} />
                <MyAppButton
                    title="Cancel"
                    padding={RFPercentage(1.6)}
                    // onPress={() => props.navigation.navigate("DriverIDScreen")}
                    backgroundColor={Colors.white}
                    borderWidth={RFPercentage(0.1)}
                    fontSize={RFPercentage(2.2)}
                    borderColor={Colors.grey}
                    color={Colors.red}
                    bold={false}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
            </View>
        </Screen>
    );
}

export default NewPlantScreen;