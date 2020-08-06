import {
    createSwitchNavigator,
    createAppContainer,
  } from "react-navigation";
  import { createStackNavigator } from "react-navigation-stack";
  import initialScreen from '../screens/initialScreen'
  

  const AuthStack = createStackNavigator({
    InitialScreen: {
		screen: initialScreen,
		navigationOptions: { header: null },
	},
  });
  
  const AppNavigator = createSwitchNavigator(
    { 
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth"
    }
  );
  
  export const NavigationContainer = createAppContainer(AppNavigator);