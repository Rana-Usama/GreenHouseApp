import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function WelcomeScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* top image */}
            <Image style={styles.imageTop} source={require('../../assets/images/wel.png')} />
            <Text style={{ fontFamily: 'Roboto_700Bold', marginTop: RFPercentage(0.5), color: Colors.black, fontSize: RFPercentage(4.8), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }}>
                Welcome
            </Text>

            {/* Buttons */}
            <View style={{ position: 'absolute', bottom: RFPercentage(4), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Sign up"
                    onPress={() => props.navigation.navigate("SignupScreen")}
                    gradient={true}
                    bold={false}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    fontFamily={'Roboto_500Medium'}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(1.2)}
                    width={"90%"}
                />
                <View style={{ marginTop: RFPercentage(2) }} />
                <MyAppButton
                    title="Log in"
                    onPress={() => props.navigation.navigate("LoginScreen")}
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

        </Screen>
    );
}

const styles = StyleSheet.create({
    imageTop: {
        width: RFPercentage(29),
        height: RFPercentage(29),
        marginTop: RFPercentage(20)
    },
})

export default WelcomeScreen;