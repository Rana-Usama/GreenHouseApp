import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../config/Colors";

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
}) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ flexDirection: 'row', backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, width: width, borderRadius: borderRadius, justifyContent: "center", alignItems: "center", alignSelf: "center", padding: padding }} >

            {icon == true ?
                <MaterialCommunityIcons name={iconName} style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(0.5) }} color={iconColor} />
                :
                null
            }

            <Text style={{ fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: bold ? "bold" : null }} >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default MyAppButton;