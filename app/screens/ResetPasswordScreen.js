import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function ResetPasswordScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ marginTop: RFPercentage(7), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(4), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Reset Password
                </Text>
                <Text style={{ marginTop: RFPercentage(3.2), fontSize: RFPercentage(1.9) }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cras ut praesent ligula urna nisl.
                </Text>
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(6), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Next"
                    padding={RFPercentage(1.6)}
                    // onPress={() => handleConfirm()}
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

const styles = StyleSheet.create({

})

export default ResetPasswordScreen;