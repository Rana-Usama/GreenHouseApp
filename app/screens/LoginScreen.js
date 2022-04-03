import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//compoenents
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModal';
import InputField from './../components/common/InputField';
import MyAppButton from '../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    const [greenBorder, setGreenBorder] = useState(false);

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email",
            value: "",
        },
        {
            placeholder: "Password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
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

    const socialLinksData = [
        {
            backColor: Colors.blue,
            title: 'Continue With Google',
            logoSource: require('../../assets/images/g.png'),
            width: RFPercentage(4.2),
            height: RFPercentage(4.2)
        },
        {
            backColor: Colors.black,
            title: 'Continue With Apple',
            logoSource: require('../../assets/images/a.png'),
            width: RFPercentage(3.5),
            height: RFPercentage(4.2)
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(4), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            Login
                        </Text>
                        <Text style={{ marginTop: RFPercentage(3.2), fontSize: RFPercentage(1.9) }} >
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

                    <View style={{ marginTop: RFPercentage(3.8), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '500' }} >
                            Don't have an account?
                        </Text>
                        <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(0.6) }} >
                            <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.red, fontSize: RFPercentage(1.9), fontWeight: '500', textDecorationLine: 'underline' }} >
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <View style={{ marginTop: RFPercentage(6), width: '100%', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <MyAppButton
                            title="Log in"
                            onPress={() => props.navigation.navigate("ConfirmationScreen")}
                            gradient={true}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={'Roboto_500Medium'}
                            fontSize={RFPercentage(2.2)}
                            borderRadius={RFPercentage(1.2)}
                            width={"90%"}
                        />
                    </View>

                    {/* Saperator */}
                    <View style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ backgroundColor: Colors.grey, width: RFPercentage(22), height: RFPercentage(0.1) }} />
                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9), marginLeft: RFPercentage(1) }} >
                            or
                        </Text>
                        <View style={{ backgroundColor: Colors.grey, width: RFPercentage(22), height: RFPercentage(0.1), marginLeft: RFPercentage(1) }} />
                    </View>

                    {/* Social links */}
                    {socialLinksData.map((item, i) => (
                        <TouchableOpacity key={i} activeOpacity={0.8} style={{ marginTop: i == 0 ? RFPercentage(4) : RFPercentage(1.6), width: '90%', height: RFPercentage(6.6), backgroundColor: item.backColor, borderRadius: RFPercentage(1.2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: item.width, height: item.height, marginRight: RFPercentage(1) }} source={item.logoSource} />
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }} >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}

                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '500' }} >
                            Forget password?
                        </Text>
                        <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(0.6) }} >
                            <Text style={{ fontFamily: 'Roboto_400Regular', color: Colors.red, fontSize: RFPercentage(1.9), fontWeight: '500', textDecorationLine: 'underline' }} >
                                Reset Password
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default LoginScreen;