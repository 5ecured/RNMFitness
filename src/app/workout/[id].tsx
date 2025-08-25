import { View, Text } from '@/components/general/Themed'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const WorkoutScreen = () => {
    const { id } = useLocalSearchParams()

    return (
        <View style={{ flex: 1 }}>
            <Text>workout screen: {id}</Text>
        </View>
    )
}

export default WorkoutScreen