import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView, Switch } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const detailsBox = [
        {
            id: '1',
            title: '28 C',
            iconSource: require('../../assets/images/temp2.png'),

        },
        {
            id: '2',
            title: '95%',
            iconSource: require('../../assets/images/drop2.png'),

        },
        {
            id: '3',
            title: '369 W',
            iconSource: require('../../assets/images/elec2.png'),

        },
        {
            id: '4',
            title: '13 lux',
            iconSource: require('../../assets/images/bulb2.png'),

        },

    ]

    const controlsBox = [
        {
            id: '1',
            title: 'Rotor',
            iconSource: require('../../assets/images/fan.png'),
            toggleSwitch: toggleSwitch1,
            isEnabled: isEnabled1
        },
        {
            id: '2',
            title: 'Live View',
            iconSource: require('../../assets/images/camera.png'),
            toggleSwitch: toggleSwitch2,
            isEnabled: isEnabled2

        },
        {
            id: '3',
            title: 'Grow Lights',
            iconSource: require('../../assets/images/bb.png'),
            toggleSwitch: toggleSwitch3,
            isEnabled: isEnabled3

        },
        {
            id: '4',
            title: 'Water Pump',
            iconSource: require('../../assets/images/watering.png'),
            toggleSwitch: toggleSwitch4,
            isEnabled: isEnabled4

        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight: 'bold' }} >
                    Welcome Back
                </Text>
                <Text style={{ color: Colors.red, fontSize: RFPercentage(2.5), fontWeight: 'bold' }} >
                    ,Jhon
                </Text>
                <View style={{ position: 'absolute', right: 0, backgroundColor: Colors.white, width: RFPercentage(7), height: RFPercentage(7), borderColor: Colors.primary, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(30) }} >
                    <Image style={{ width: RFPercentage(6.2), height: RFPercentage(6.2) }} source={require('../../assets/images/profile.png')} />
                </View>
            </View>

            {/*Top Buttons */}
            <View style={{ marginTop: RFPercentage(6), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '91%' }} >
                <View style={{ width: '60%', height: RFPercentage(6), backgroundColor: '#F7F7F7', borderRadius: RFPercentage(20), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: '45%', height: RFPercentage(5), borderRadius: RFPercentage(20), backgroundColor: activeButton == '1' ? Colors.primary : "#F7F7F7" }} >
                        <Text style={{ color: activeButton == '1' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            System 1
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(2), width: '45%', height: RFPercentage(5), borderRadius: RFPercentage(20), backgroundColor: activeButton == '2' ? Colors.primary : "#F7F7F7" }} >
                        <Text style={{ color: activeButton == '2' ? Colors.white : Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            System 2
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Details Box */}
                    <View style={{ marginTop: RFPercentage(3), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <FlatList
                            data={detailsBox}
                            keyExtractor={detailsBox => detailsBox.id.toString()}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: RFPercentage(0.5), marginTop: RFPercentage(1), width: RFPercentage(24.5), height: RFPercentage(9.5), backgroundColor: '#F7F7F7', borderRadius: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                    <Image style={{ marginLeft: RFPercentage(3), width: RFPercentage(4.5), height: RFPercentage(5) }} source={item.iconSource} />
                                    <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(2.5), marginLeft: RFPercentage(0.6) }} >
                                        {item.title}
                                    </Text>
                                </View>
                            }
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                            Devices
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(3), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <FlatList
                            data={controlsBox}
                            keyExtractor={controlsBox => controlsBox.id.toString()}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: RFPercentage(0.5), marginTop: RFPercentage(1), width: RFPercentage(25), height: RFPercentage(30), backgroundColor: Colors.white, borderColor: Colors.primary, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                                    <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={item.iconSource} />

                                    <View style={{ marginTop: RFPercentage(2), width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                                        <Text style={{ marginRight: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: 'bold', marginTop: RFPercentage(1) }} >
                                            {item.title}
                                        </Text>
                                        <Switch
                                            trackColor={{ false: Colors.grey, true: "#fd8413" }}
                                            thumbColor={item.isEnabled ? Colors.white : "#fd8413"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={item.toggleSwitch}
                                            value={item.isEnabled}
                                        />
                                    </View>

                                </View>
                            }
                        />
                    </View>

                </View>
                <View style={{ marginBottom: RFPercentage(15) }} />
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;