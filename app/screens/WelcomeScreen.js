import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
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
            <Text style={{ marginTop: RFPercentage(1.2), color: Colors.black, fontSize: RFPercentage(4.8), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }}>
                Welcome
            </Text>

            {/* Buttons */}
            <View style={{ position: 'absolute', bottom: RFPercentage(4), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Sign up"
                    padding={RFPercentage(1.6)}
                    // onPress={() => props.navigation.navigate("StudentIDScreen")}
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
                    title="Log in"
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
    imageTop: {
        width: RFPercentage(27.5),
        height: RFPercentage(27.5),
        marginTop: RFPercentage(20)
    },
})

export default WelcomeScreen;