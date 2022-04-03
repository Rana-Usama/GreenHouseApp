import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function ConfirmationScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            {/* Top Image */}
            <Image style={styles.topImage} source={require('../../assets/images/mail.png')} />

            <Text style={{ fontFamily: 'Roboto_500Medium', marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(3.8), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }}>
                Verify your email
            </Text>

            <View style={styles.centerText} >
                <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.black, fontSize: RFPercentage(1.9), textAlign: 'center' }}>
                    Please check your inbox to find a link to verify your account.
                    Check your spam folder if you can’t find it.
                </Text>

                <Text style={{ fontFamily: 'Roboto_700Bold', marginTop: RFPercentage(5), color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                    Didn't receive a code?
                </Text>
            </View>

            {/* Resend Button */}
            <View style={{ position: 'absolute', bottom: RFPercentage(5), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Resend"
                    onPress={() => props.navigation.navigate("ResetPasswordScreen")}
                    gradient={true}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    topImage: {
        marginTop: RFPercentage(25),
        width: RFPercentage(23),
        height: RFPercentage(20.2)
    },
    centerText: {
        marginTop: RFPercentage(4),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default ConfirmationScreen;