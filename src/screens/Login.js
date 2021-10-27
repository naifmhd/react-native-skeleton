
import React, { useState, useContext, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { AuthContext } from './../services/AuthService'

export default function Login() {
    const { loginWithGoogle, login } = useContext(AuthContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Google"
                onPress={loginWithGoogle}
            />
            <Button
                title="Login"
                onPress={() => login('naifmhd@gmail.com', 'password')}
            />
        </View>
    )
}
