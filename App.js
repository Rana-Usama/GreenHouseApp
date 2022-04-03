import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Roboto_700Bold, Roboto_400Regular, Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto"
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import ConfirmationScreen from './app/screens/ConfirmationScreen';
import NewPasswordScreen from './app/screens/NewPasswordScreen';
import ResetPasswordScreen from './app/screens/ResetPasswordScreen';
import PlantDetailsScreen from './app/screens/PlantDetailsScreen';
import MyPlantsScreen from './app/screens/MyPlantsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import NewPlantScreen from './app/screens/NewPlantScreen';
import HomeScreen from './app/screens/HomeScreen';
import ScheduleScreen from './app/screens/ScheduleScreen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })


  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="PlantDetailsScreen" component={PlantDetailsScreen} />
        <Stack.Screen name="MyPlantsScreen" component={MyPlantsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="NewPlantScreen" component={NewPlantScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


