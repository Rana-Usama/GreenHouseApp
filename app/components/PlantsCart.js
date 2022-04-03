import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//config
import Colors from '../config/Colors';

function PlantsCart(props) {

    const plantsCartData = [
        {
            no: '1',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },
        {
            no: '2',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },
        {
            no: '3',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },
        {
            no: '4',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },
        {
            no: '5',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },
        {
            no: '6',
            title: 'Apple Tree',
            plants: '35 Plants',
            level: 'Level 3',
            date: '25/12/2022'
        },

    ]

    return (
        <>
            {plantsCartData.map((item, i) => (
                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(4.5) : RFPercentage(1), width: '90%', height: RFPercentage(12), borderRadius: RFPercentage(2), backgroundColor: '#F7F7F7', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >

                    <View style={{ marginBottom: RFPercentage(2.5), alignSelf: 'center', marginLeft: RFPercentage(2), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(4), height: RFPercentage(4), borderRadius: RFPercentage(1), backgroundColor: Colors.primary }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                {item.no}
                            </Text>
                        </View>
                        <Text style={{ fontFamily: 'Roboto_700Bold', marginLeft: RFPercentage(2), color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                            {item.title}
                        </Text>
                        <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', right: 0 }} >
                            <AntDesign name="delete" style={{ fontSize: RFPercentage(2.5) }} color={Colors.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ position: 'absolute', bottom: RFPercentage(1.2), left: RFPercentage(6), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/images/p.png')} />
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: '#444444', fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.7) }}>
                            {item.plants}
                        </Text>

                        <Image style={{ marginLeft: RFPercentage(2.5), width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/images/l.png')} />
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: '#444444', fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.7) }}>
                            {item.level}
                        </Text>

                        <Image style={{ marginLeft: RFPercentage(2.5), width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/images/c.png')} />
                        <Text style={{ fontFamily: 'Roboto_400Regular', color: '#444444', fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.7) }}>
                            {item.date}
                        </Text>
                    </View>
                </View>
            ))}
        </>
    );
}

export default PlantsCart;