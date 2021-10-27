import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { getStudents } from './../services/ApiService'

export default function Home() {
    useEffect(() => {
        console.log("ddd")
        console.log(getStudents())
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
}
