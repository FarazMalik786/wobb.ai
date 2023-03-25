import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home_Screen from '../Home_Screen/Home_Screen'
import MenuDetails from '../Menu_Details_Screen/MenuDetails'
import FavouriteMeals from '../FavouriteMeals_Screen/FavouriteMeals'
import { Provider } from 'react-redux';
import { mystore } from '../Redux/Store'
const Stack = createNativeStackNavigator();
function Navigation() {
  return (

    <NavigationContainer >
      <Provider store={mystore}>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home_Screen} options={{ headerShown: false }} />
          <Stack.Screen name='menuItem' component={MenuDetails} options={{ headerTitleAlign: "center" }} />
          <Stack.Screen name='FavouriteMeals' component={FavouriteMeals} options={{ headerTitleAlign: "center" }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  )
}

export default Navigation
