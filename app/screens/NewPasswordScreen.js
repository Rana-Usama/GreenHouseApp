import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function NewPasswordScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Type new password",
            value: "",
            secure: true
        },
        {
            placeholder: "Re-type new password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleConfirm = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value !== tempfeilds[1].value) {
            alert("Password don't match!");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />

            <View style={{ marginTop: RFPercentage(7), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontSize: RFPercentage(4), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Enter New Password
                </Text>
                <Text style={{ fontFamily: 'Roboto_400Regular', marginTop: RFPercentage(3.2), fontSize: RFPercentage(1.9) }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cras ut praesent ligula urna nisl.
                </Text>
            </View>

            {/* Input field */}
            <View style={{ marginTop: RFPercentage(3.8), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.5) }} >
                        <InputField
                            placeholder={item.placeholder}
                            placeholderColor={Colors.darkGrey}
                            height={RFPercentage(6.5)}
                            backgroundColor={Colors.white}
                            // onTouchStart={() => setGreenBorder(true)}
                            // onTouchEnd={() => setGreenBorder(false)}
                            borderWidth={RFPercentage(0.2)}
                            borderColor={Colors.grey}
                            secure={item.secure}
                            borderRadius={RFPercentage(1.3)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"92%"}
                        />
                    </View>
                ))}
            </View>

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(6), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                <MyAppButton
                    title="Confirm"
                    onPress={() => props.navigation.navigate("HomeScreen")}
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

export default NewPasswordScreen;