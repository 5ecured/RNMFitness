import { useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { View, Text } from '@/components/general/Themed'


const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                gap: 10,
            }}
        >
            <Text style={{ fontSize: 30 }}>title</Text>
            <Link href='/workout/current'>
                <Text>
                    Resume current workout
                </Text>
            </Link>
            <Link href='/workout/123'>
                <Text>
                    Open workout with id 123
                </Text>
            </Link>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen