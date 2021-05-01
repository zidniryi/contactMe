import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactScreen from '../views/contactScreen';
import DetailScreen from '../views/detailScreen';
import AddScreen from '../views/addScreen';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailContact"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
