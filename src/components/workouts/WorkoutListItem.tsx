import { View, Text } from '../general/Themed'
import React from 'react'
import Card from '../general/Card'
import { StyleSheet } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { WorkoutWithExercises } from '@/types/models'

type WorkoutListItem = {
    workout: WorkoutWithExercises
}

const WorkoutListItem = ({ workout }: WorkoutListItem) => {
    return (
        <Card title={workout.createdAt} style={{ gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }}>Exercise</Text>
                <Text style={{ fontWeight: 'bold' }}>Best set</Text>
            </View>

            {workout.exercises.map(exercise => {
                const bestSet = exercise.sets[0]

                return (
                    <View key={exercise.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'gray' }}>
                            {exercise.sets.length} x {exercise.name}
                        </Text>
                        <Text style={{ color: 'gray' }}>
                            {bestSet.reps} {bestSet.weight ? `x ${bestSet.weight} kg` : 'reps'}
                        </Text>
                    </View>
                )
            })}

            {/* Footer */}

            <View
                style={{
                    flexDirection: 'row',
                    gap: 20,
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderTopColor: 'gray',
                    marginTop: 10,
                    paddingTop: 10
                }}
            >
                <Text>
                    <FontAwesome5 name='clock' size={16} color='gray' />0:45
                </Text>
                <Text>
                    <FontAwesome5 name='weight-hanging' size={16} color='gray' />1534 kg
                </Text>
            </View>
        </Card>
    )
}

export default WorkoutListItem