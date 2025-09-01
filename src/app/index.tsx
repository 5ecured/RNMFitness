import { FlatList, useColorScheme } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Colors from '@/constants/Colors'
import { View, Text } from '@/components/general/Themed'
import CustomButton from '@/components/general/CustomButton'
import Card from '@/components/general/Card'
import WorkoutListItem from '@/components/workouts/WorkoutListItem'
import { create } from 'zustand'
import { useWorkouts } from '@/store'

const HomeScreen = () => {
    const currentWorkout = useWorkouts(state => state.currentWorkout)
    const startWorkout = useWorkouts(state => state.startWorkout)
    const workouts = useWorkouts(state => state.workouts)

    const onStartWorkout = () => {
        startWorkout()
        router.push('/workout/current')
    }

    return (
        <View
            style={{
                flex: 1,
                gap: 10,
                padding: 10,
                backgroundColor: 'transparent'
            }}
        >

            {currentWorkout ? (
                <Link href='/workout/current' asChild>
                    <CustomButton title='Resume workout' type='primary' />
                </Link>
            ) : (
                <CustomButton title='Start new workout' type='primary' onPress={onStartWorkout} />
            )}


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