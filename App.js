// In App.js in a new project

import React, { useState, useContext, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthProvider } from './src/services/AuthService'
import * as SecureStore from 'expo-secure-store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './src/screens/Login'
import Main from './src/navigator/Main'

function Loading() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading Screen</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator()

function App() {
    const auth = getAuth()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
            setLoading(false)
        })
        return subscriber
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        user == null ? (
                            <>
                                <Stack.Screen name="SignIn" component={Login} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="Main" component={Main} />
                            </>
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
}

export default App
