import { View, Text } from '@/components/general/Themed'
import WorkoutExerciseItem from '@/components/logger/WorkoutExerciseItem'
import React from 'react'
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'
import { Stack } from 'expo-router'
import CustomButton from '@/components/general/CustomButton'
import WorkoutHeader from '@/components/logger/WorkoutHeader'

const CurrentWorkoutScreen = () => {
    const headerHeight = useHeaderHeight()

    return (
        <>
            <Stack.Screen options={{
                headerRight: () => (
                    <CustomButton
                        title='Finish'
                        onPress={() => { }}
                        style={{ padding: 7, width: 'auto', paddingHorizontal: 15 }}
                    />
                )
            }} />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={headerHeight}
            >
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={() => <WorkoutExerciseItem />}
                    contentContainerStyle={{ gap: 10, padding: 10 }}
                    ListHeaderComponent={<WorkoutHeader />}
                />
            </KeyboardAvoidingView>
        </>
    )
}

export default CurrentWorkoutScreen