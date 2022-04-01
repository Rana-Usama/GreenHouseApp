import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {

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

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


