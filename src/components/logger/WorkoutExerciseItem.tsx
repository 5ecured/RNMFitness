import { View, Text } from '@/components/general/Themed'
import React from 'react'
import Card from '../general/Card'
import { StyleSheet } from 'react-native'
import SetItem from './SetItem'
import { ExerciseSet } from '@/types/models'
import CustomButton from '../general/CustomButton'

const WorkoutExerciseItem = () => {
    const sets: ExerciseSet[] = [
        {
            id: '1',
            weight: 20,
            reps: 10,
            exerciseId: 'e1'
        },
        {
            id: '2',
            weight: 50,
            reps: 5,
            exerciseId: 'e1'
        },
    ]

    return (
        <Card title='Exercise'>
            <View style={styles.header}>
                <Text style={styles.setNumber}>Set</Text>
                <Text style={styles.setInfo}>kg</Text>
                <Text style={styles.setInfo}>Reps</Text>
            </View>
            <View style={{ gap: 5 }}>
                {sets.map((el, index) => (
                    <SetItem key={el.id} index={index} set={el} />
                ))}
            </View>
            <CustomButton
                title='+ Add set'
                type='link'
                onPress={() => console.warn('adding set')}
                style={{ padding: 10, marginTop: 10 }}
            />
        </Card>
    )
}

export default WorkoutExerciseItem

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 5
    },
    setNumber: {
        marginRight: 'auto',
        fontWeight: 'bold'
    },
    setInfo: {
        width: 60,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})