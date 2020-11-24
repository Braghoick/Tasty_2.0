import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, Recipe } from "./src/screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import constants from "./src/utils/constants";

const Stack = createStackNavigator();

const Router = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={constants.SCREEN.HOME}
          screenOptions={{
            headerStyle: {
              backgroundColor: constants.COLORS.LIGHT_GRAY,
            },
            headerLeft: (props) =>
              props.canGoBack && (
                <MaterialCommunityIcons
                  name="keyboard-backspace"
                  size={24}
                  color={constants.COLORS.TEXT_COLOR}
                  {...props}
                  style={{ marginLeft: 20 }}
                />
              ),
          }}
        >
          <Stack.Screen
            name={constants.SCREEN.HOME}
            component={HomeScreen}
            options={{
              title: "",
              headerShown: "",
            }}
          />

          <Stack.Screen
            name={constants.SCREEN.DETAILS}
            component={Recipe}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Router
