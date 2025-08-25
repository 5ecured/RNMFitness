import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomeScreen = () => {
    return (
        <View style={{flex: 1, alignItems:'center', gap: 10}}>
            <Link href='/workout/current'>Resume current workout</Link>
            <Link href='/workout/123'>Open workout with id 123</Link>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen