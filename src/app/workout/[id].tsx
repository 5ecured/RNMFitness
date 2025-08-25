import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const WorkoutScreen = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>workout screen: {id}</Text>
        </View>
    )
}

export default WorkoutScreen