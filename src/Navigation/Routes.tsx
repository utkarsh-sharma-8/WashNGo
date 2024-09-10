import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { First, LetsStart, SignUp, Signin, Welcome } from '../index';


const Stack = createNativeStackNavigator();
const Routes=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="First" component={First}/>
            <Stack.Screen name="LetsStart" component={LetsStart}/>
            <Stack.Screen name="SignIn" component={Signin}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Welcome" component={Welcome}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;