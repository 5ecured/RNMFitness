import { FlatList, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { View, Text } from '@/components/general/Themed'
import CustomButton from '@/components/general/CustomButton'
import Card from '@/components/general/Card'
import WorkoutListItem from '@/components/workouts/WorkoutListItem'
import workouts from '@/data/dummyWorkouts'

const workout = workouts[0]

const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                gap: 10,
                padding: 10,
                backgroundColor: 'transparent'
            }}
        >
            <Link href='/workout/current' asChild>
                <CustomButton title='Resume workout' type='primary' />
            </Link>

            <FlatList
                data={workouts}
                renderItem={({ item }) => (
                    <WorkoutListItem
                        workout={item}
                    />
                )}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View >
    )
}

export default HomeScreen