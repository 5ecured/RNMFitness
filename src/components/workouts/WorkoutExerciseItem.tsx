import React from 'react'
import Card from '../general/Card'
import { ExerciseWithSets } from '@/types/models'
import { View, Text } from '../general/Themed'
import { StyleSheet } from 'react-native'
import { getBestSet } from '@/services/setService'
import Colors from '@/constants/Colors'

type WorkoutExerciseItem = {
    exercise: ExerciseWithSets
}

const WorkoutExerciseItem = ({ exercise }: WorkoutExerciseItem) => {
    const bestSet = getBestSet(exercise.sets)

    return (
        <Card title={exercise.name}>
            {exercise.sets.map((exerciseSet, index) => (
                <View
                    key={exerciseSet.id}
                    style={[
                        styles.setRow,
                        { backgroundColor: exerciseSet.id === bestSet?.id ? Colors.dark.tint + '50' : 'transparent' }
                    ]}
                >
                    <Text style={styles.setIndex}>{index + 1}</Text>
                    <Text style={styles.setInfo}>
                        {exerciseSet.reps}{' '}
                        {exerciseSet.weight ? `x ${exerciseSet.weight} kg` : 'reps'}
                    </Text>
                    {exerciseSet.oneRM && (<Text style={styles.setOneRM}>
                        {Math.floor(exerciseSet.oneRM)} kg
                    </Text>)}
                </View>
            ))}
        </Card>
    )
}

export default WorkoutExerciseItem

const styles = StyleSheet.create({
    setRow: {
        flexDirection: 'row',
        gap: 15,
        padding: 8
    },
    setIndex: {
        fontSize: 16,
        color: 'gray'
    },
    setInfo: {
        fontSize: 16
    },
    setOneRM: {
        fontSize: 16,
        marginLeft: 'auto',
        fontWeight: 'bold'
    }
})