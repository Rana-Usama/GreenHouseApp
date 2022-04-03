import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import OtpInputs from './../components/OtpInputs';

//config
import Colors from '../config/Colors';

function ResetPasswordScreen(props) {

    const [otp, setOtp] = useState();

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(4), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Reset Password
                </Text>
                <Text style={{ fontFamily: 'Roboto_400Regular', marginTop: RFPercentage(3.2), fontSize: RFPercentage(1.9) }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cras ut praesent ligula urna nisl.
                </Text>
            </View>

            {/* CodeInput Fields */}
            <View style={{ width: '90%', flexDirection: 'row', marginTop: RFPercentage(3), justifyContent: 'space-evenly' }}>
                <OtpInputs getOtp={(otp) => setOtp(otp)} />
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(6), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Next"
                    onPress={() => props.navigation.navigate("NewPasswordScreen")}
                    gradient={true}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
                <View style={{ marginTop: RFPercentage(2) }} />
                <MyAppButton
                    title="Cancel"
                    // onPress={() => props.navigation.navigate("LoginScreen")}
                    backgroundColor={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    borderWidth={RFPercentage(0.1)}
                    fontSize={RFPercentage(2.2)}
                    borderColor={Colors.grey}
                    color={Colors.red}
                    width={"90%"}
                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default ResetPasswordScreen;