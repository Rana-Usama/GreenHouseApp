import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function NewPlantScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Plant Name",
            value: "",
            width: '90%'
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

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

            {/* Input field */}
            <View style={{ marginTop: RFPercentage(3.8), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.5) }} >
                        <InputField
                            placeholder={item.placeholder}
                            placeholderColor={Colors.darkGrey}
                            height={RFPercentage(6.5)}
                            backgroundColor={Colors.white}
                            borderWidth={RFPercentage(0.2)}
                            borderColor={Colors.grey}
                            secure={item.secure}
                            borderRadius={RFPercentage(1.3)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={item.width}
                        />
                    </View>
                ))}
            </View>

            {/*First Two Row Input fields */}
            <View style={{ marginTop: RFPercentage(1), width: '86%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '48%', height: RFPercentage(6.5), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.3) }} >
                    <Image style={{ marginRight: RFPercentage(1), marginLeft: RFPercentage(2.2), width: RFPercentage(2.8), height: RFPercentage(3) }} source={require('../../assets/images/level2.png')} />
                    <TextInput placeholder='Level' placeholderTextColor={Colors.darkGrey} style={{ width: '100%', color: Colors.black, fontSize: RFPercentage(1.8) }} />
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', position: 'absolute', right: 0, width: '48%', height: RFPercentage(6.5), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.3) }} >
                    <Image style={{ marginRight: RFPercentage(1), marginLeft: RFPercentage(2.2), width: RFPercentage(2.8), height: RFPercentage(3) }} source={require('../../assets/images/plant2.png')} />
                    <TextInput placeholder='Number of Plants' placeholderTextColor={Colors.darkGrey} style={{ width: '100%', color: Colors.black, fontSize: RFPercentage(1.8) }} />
                </View>
            </View>

            {/*Second Two Row Input fields */}
            <View style={{ marginTop: RFPercentage(1.5), width: '86%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '48%', height: RFPercentage(6.5), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.3) }} >
                    <Image style={{ marginRight: RFPercentage(1), marginLeft: RFPercentage(2.2), width: RFPercentage(2.8), height: RFPercentage(3) }} source={require('../../assets/images/cal2.png')} />
                    <TextInput placeholder='Seed Date' placeholderTextColor={Colors.darkGrey} style={{ width: '100%', color: Colors.black, fontSize: RFPercentage(1.8) }} />
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', position: 'absolute', right: 0, width: '48%', height: RFPercentage(6.5), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.3) }} >
                    <Image style={{ marginRight: RFPercentage(1), marginLeft: RFPercentage(2.2), width: RFPercentage(2.8), height: RFPercentage(3) }} source={require('../../assets/images/cal2.png')} />
                    <TextInput placeholder='Harvest Date' placeholderTextColor={Colors.darkGrey} style={{ width: '100%', color: Colors.black, fontSize: RFPercentage(1.8) }} />
                </View>
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