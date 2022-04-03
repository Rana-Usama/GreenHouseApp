import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Roboto_700Bold, Roboto_400Regular, Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto"
import { RFPercentage } from 'react-native-responsive-fontsize';

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Octicons } from "@expo/vector-icons";
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import Colors from './app/config/Colors';

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
// const Tab = createBottomTabNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  // const HomeTab = () => (
  //   <Tab.Navigator
  //     initialRouteName="MyPlantsScreen"
  //     screenOptions={{
  //       headerShown: false,
  //       tabBarHideOnKeyboard: true,
  //       showLabel: false,
  //       style: { height: RFPercentage(8.2), borderRadius: RFPercentage(3.5) },
  //       tabStyle: { backgroundColor: Colors.white },
  //       activeTintColor: Colors.primary,
  //       inactiveTintColor: Colors.grey,
  //     }}
  // tabBarOptions={{
  //   keyboardHidesTabBar: true
  // }}
  // >
  //   <Tab.Screen
  //     name="MyPlant"
  //     component={MyPlantsScreen}
  //     options={{
  //       header: () => null,
  //       tabBarIcon: ({ color }) => (
  //         <Octicons name="sign-in" color={color} size={RFPercentage(3)} />
  //       ),
  //     }}
  //   />
  {/* <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Octicons name="sign-in" color={color} size={RFPercentage(3)} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Octicons name="sign-in" color={color} size={RFPercentage(3)} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Octicons name="sign-in" color={color} size={RFPercentage(3)} />
          ),
        }}
      /> */}
  //   </Tab.Navigator>
  // );

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
        {/* <Stack.Screen name="HomeTab" component={HomeTab} /> */}
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


