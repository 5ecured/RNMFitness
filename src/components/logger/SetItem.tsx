import { View, Text, TextInput } from '@/components/general/Themed'
import { ExerciseSet } from '@/types/models'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import CustomButton from '../general/CustomButton'

type SetItem = {
    index: number,
    set: ExerciseSet
}

const SetItem = ({ index, set }: SetItem) => {
    const [weight, setWeight] = useState(set.weight?.toString() || '')
    const [reps, setReps] = useState(set.reps?.toString() || '')

    const handleWeightChange = () => {
        console.warn('weight changed to ', weight)
    }

    const handleRepsChange = () => {
        console.warn('reps changed to ', reps)

    }

    const renderRightActions = () => (
        <CustomButton
            title='Delete'
            type='link'
            style={{ width: 'auto', padding: 5 }}
            color='crimson'
            onPress={() => console.warn('deleting set', set.id)}
        />
    )

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.container}>
                <Text style={styles.setNumber}>{index + 1}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='50'
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType='numeric'
                    onBlur={handleWeightChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder='8'
                    value={reps}
                    onChangeText={setReps}
                    keyboardType='numeric'
                    onBlur={handleRepsChange}
                />
            </View>
        </Swipeable>
    )
}

export default SetItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    setNumber: {
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        width: 60,
        padding: 5,
        paddingVertical: 7,
        fontSize: 16,
        textAlign: 'center'
    }
})