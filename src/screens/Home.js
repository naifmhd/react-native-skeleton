import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { getStudents, getUsers, setCities } from './../services/ApiService'

export default function Home() {
    useEffect(() => {
        console.log("ddd")
        // console.log(getStudents())
        getUsers().then((d) => {
            console.log(d)
        })
        // setCities()
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
}
