import React, {useState, useEffect} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/signin/SigninScreen'
import SignupScreen from '../screens/signup/SignupScreen';
import SplashScreen from '../screens/splash/SplashScreen';
import PhysicsScreen from '../screens/physics/PhysicsScreen';
import SuggestionScreen from '../screens/suggestion/SuggestionScreen';
import RoutineScreen from '../screens/routine/RoutineScreen';
import auth from '@react-native-firebase/auth';
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator();

// export default function Navigation() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;
//   console.log('user', user)

//   if (!user) {
//     return (
//       <Stack.Navigator initialRouteName = 'Splash' headerMode = 'none'>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="Signin" component={SigninScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="Physics" component={PhysicsScreen}/>
//         <Stack.Screen name="Suggestion" component={SuggestionScreen}/>
//         <Stack.Screen name="Routine" component={RoutineScreen}/>
//       </Stack.Navigator>
//     );
//   }

//   return (
//       <Stack.Navigator headerMode = 'none'>
//         {/* <Stack.Screen name="Physics" component={PhysicsScreen}/>
//         <Stack.Screen name="Suggestion" component={SuggestionScreen}/>
//         <Stack.Screen name="Routine" component={RoutineScreen}/> */}
//         <Stack.Screen name="Menu" component={BottomNavigation} />
//       </Stack.Navigator>
//   );
// } 

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName = 'Splash' headerMode = 'none'>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Physics" component={PhysicsScreen}/>
      <Stack.Screen name="Suggestion" component={SuggestionScreen}/>
      <Stack.Screen name="Routine" component={RoutineScreen}/>
         <Stack.Screen name="Menu" component={BottomNavigation}/> 
    </Stack.Navigator>
   )
}