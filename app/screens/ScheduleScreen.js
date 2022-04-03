import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import HomeScreen from './HomeScreen';

function ScheduleScreen(props) {

    const [sliderValue, setSliderValue] = useState(0);

    const detailsBox = [
        {
            id: '1',
            placeholder: 'hrs',

        },
        {
            id: '2',
            placeholder: 'min',

        },
        {
            id: '3',
            placeholder: 'hrs',

        },
        {
            id: '4',
            placeholder: 'min',

        },

    ]
    // const handleChange = (text, i) => {
    //     let tempfeilds = [...inputField];
    //     tempfeilds[i].value = text;
    //     SetInputField(tempfeilds);

    // };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ marginTop: RFPercentage(2), width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ fontFamily: 'Roboto_700Bold', color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(3.2) }} >
                    Schedule
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.4} style={{ position: 'absolute', left: 0 }} >
                    <Entypo name="chevron-small-left" style={{ fontSize: RFPercentage(4.5) }} color={Colors.darkGrey} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>



                    <View style={{ marginTop: RFPercentage(2.5), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ fontFamily: 'Roboto_700Bold', marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            Grow Light
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >

                        <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                <Text style={{ color: "#444444", fontSize: RFPercentage(1.8) }} >
                                    Intensity
                                </Text>
                                <Text style={{ position: 'absolute', right: 0, color: "#444444", fontSize: RFPercentage(1.8) }} >
                                    {sliderValue.toFixed()}%
                                </Text>
                            </View>
                            <Slider
                                style={{ width: '100%', marginTop: RFPercentage(0.5) }}
                                minimumValue={0}
                                thumbTintColor={'#fd8413'}
                                maximumValue={100}
                                minimumTrackTintColor="#fd8413"
                                maximumTrackTintColor="#F7F7F7"
                                value={sliderValue}
                                onValueChange={
                                    (sliderValue) => setSliderValue(sliderValue)
                                }
                            />
                        </View>
                        <Image style={{ width: RFPercentage(11), height: RFPercentage(13), position: 'absolute', right: 0, bottom: RFPercentage(1) }} source={require('../../assets/images/bb.png')} />
                    </View>

                    {/* First row of input fields */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ width: '75%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-start' }} >

                            <Text style={{ color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Running Time
                            </Text>
                            <Text style={{ position: 'absolute', right: 0, color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Interval Time
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(1.5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <FlatList
                            data={detailsBox}
                            keyExtractor={detailsBox => detailsBox.id.toString()}
                            numColumns={4}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: RFPercentage(0.5), marginLeft: item.id == 3 ? RFPercentage(4) : 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: RFPercentage(11), height: RFPercentage(7), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(1.2) }} >
                                    <TextInput placeholder={item.placeholder} placeholderTextColor={'#444444'} style={{ color: "#444444", fontSize: RFPercentage(2), marginLeft: RFPercentage(1.2) }} />
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: RFPercentage(0.7) }} >
                                        <Ionicons name="caret-down-outline" style={{ fontSize: RFPercentage(2) }} color={"#444444"} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            Rotor
                        </Text>
                        <Image style={{ width: RFPercentage(11), height: RFPercentage(11), position: 'absolute', right: 0 }} source={require('../../assets/images/fan.png')} />
                    </View>

                    {/* Second row of input fields */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ width: '75%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-start' }} >

                            <Text style={{ color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Running Time
                            </Text>
                            <Text style={{ position: 'absolute', right: 0, color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Interval Time
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(1.5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <FlatList
                            data={detailsBox}
                            keyExtractor={detailsBox => detailsBox.id.toString()}
                            numColumns={4}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: RFPercentage(0.5), marginLeft: item.id == 3 ? RFPercentage(4) : 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: RFPercentage(11), height: RFPercentage(7), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(1.2) }} >
                                    <TextInput placeholder={item.placeholder} placeholderTextColor={'#444444'} style={{ color: "#444444", fontSize: RFPercentage(2), marginLeft: RFPercentage(1.2) }} />
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: RFPercentage(0.7) }} >
                                        <Ionicons name="caret-down-outline" style={{ fontSize: RFPercentage(2) }} color={"#444444"} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ marginTop: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(3.5), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            Water Pump
                        </Text>
                        <Image style={{ width: RFPercentage(12), height: RFPercentage(12), position: 'absolute', right: 0 }} source={require('../../assets/images/watering.png')} />
                    </View>

                    {/* Third row of input fields */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ width: '75%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-start' }} >

                            <Text style={{ color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Running Time
                            </Text>
                            <Text style={{ position: 'absolute', right: 0, color: "#444444", fontSize: RFPercentage(1.8) }}>
                                Interval Time
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(1.5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <FlatList
                            data={detailsBox}
                            keyExtractor={detailsBox => detailsBox.id.toString()}
                            numColumns={4}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: RFPercentage(0.5), marginLeft: item.id == 3 ? RFPercentage(4) : 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: RFPercentage(11), height: RFPercentage(7), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(1.2) }} >
                                    <TextInput placeholder={item.placeholder} placeholderTextColor={'#444444'} style={{ color: "#444444", fontSize: RFPercentage(2), marginLeft: RFPercentage(1.2) }} />
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: RFPercentage(0.7) }} >
                                        <Ionicons name="caret-down-outline" style={{ fontSize: RFPercentage(2) }} color={"#444444"} />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>

                    {/* Buttons */}
                    <View style={{ marginTop: RFPercentage(4), width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <MyAppButton
                            title="Reset"
                            padding={RFPercentage(1.6)}
                            // onPress={() => props.navigation.navigate("DriverIDScreen")}
                            icon={true}
                            iconName={'restart'}
                            iconColor={Colors.red}
                            borderWidth={RFPercentage(0.1)}
                            backgroundColor={Colors.white}
                            fontSize={RFPercentage(2)}
                            borderColor={Colors.grey}
                            color={Colors.red}
                            bold={false}
                            width={"65%"}
                        />
                        <View style={{ marginLeft: RFPercentage(-12) }} />
                        <MyAppButton
                            title="Save"
                            // onPress={() => props.navigation.navigate("ResetPasswordScreen")}
                            gradient={true}
                            icon={true}
                            iconName={'content-save-all-outline'}
                            iconColor={Colors.white}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={'Roboto_500Medium'}
                            fontSize={RFPercentage(2)}
                            borderRadius={RFPercentage(1.2)}
                            width={"65%"}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: RFPercentage(15) }} />
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default ScheduleScreen;