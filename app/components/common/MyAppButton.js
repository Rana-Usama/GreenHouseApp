import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../config/Colors";
import { LinearGradient } from 'expo-linear-gradient';

function MyAppButton({
    title,
    onPress,
    icon = false,
    iconName,
    iconColor,
    bold = true,
    borderRadius = RFPercentage(30),
    fontSize = RFPercentage(2.4),
    backgroundColor,
    fontFamily = null,
    padding = RFPercentage(2),
    width = "100%",
    color,
    borderWidth = null,
    borderColor = null,
    gradient = false,
}) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ width: width, backgroundColor: backgroundColor }} >
            <LinearGradient colors={gradient ? ['#FB3B16', '#FFC011'] : ["#fff", '#fff']} start={[1, 1]} end={[0.2, 0.3]} style={{ alignSelf: 'center', alignItems: "center", flexDirection: 'row', justifyContent: 'center', borderRadius: RFPercentage(1.3), width: width, height: RFPercentage(6.6), borderColor: gradient ? null : borderColor, borderWidth: gradient ? null : borderWidth }} >

                {icon == true ?
                    <MaterialCommunityIcons name={iconName} style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(0.5) }} color={iconColor} />
                    :
                    null
                }

                <Text style={{ fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: bold ? "bold" : null }} >
                    {title}
                </Text>

            </LinearGradient>
        </TouchableOpacity>
    );
}

export default MyAppButton;