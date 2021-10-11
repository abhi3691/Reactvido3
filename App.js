import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from './src/Login'
import Flexbox from './src/Flexbox'
import Home from './src/Drawer/Home'
import Profile from './src/Drawer/Profile'
import Settings from './src/Drawer/Settings'
import AboutUs from './src/Drawer/AboutUs'
import DrawerContent from './src/DrawerContent'


const Stack  = createStackNavigator()
const Drawer = createDrawerNavigator()
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = 'Login'
            component={Login}
            options ={{headerShown:false}}
            />

            <Stack.Screen
            name = 'FlexBox'
            component= {Flexbox}
            options ={{headerShown:false}}
            />
            <Stack.Screen
            name='Drawer'
            component={MyDrawer}
            options ={{headerShown:false}}
            />


        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent={(props)=> <DrawerContent {...props}/>}>
        <Drawer.Screen
        name='Home'
        component={Home}
        />
        <Drawer.Screen
        name='Profile'
        component={Profile}
        />
        <Drawer.Screen
        name='AboutUs'
        component={AboutUs}
        />
        <Drawer.Screen
        name='Settings'
        component={Settings}
        />
    </Drawer.Navigator>
    )

}

export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}