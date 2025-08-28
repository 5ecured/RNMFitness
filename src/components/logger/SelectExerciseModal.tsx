import { View, Text, TextInput } from '@/components/general/Themed'
import React, { useState } from 'react'
import CustomButton from '../general/CustomButton'
import { Modal, Pressable, StyleSheet } from 'react-native'
import Card from '../general/Card'
import AntDesign from '@expo/vector-icons/AntDesign'
import exercises from '@/data/exercises'
import { FlatList } from 'react-native-gesture-handler'

type SelectExerciseModal = {
    onSelectExercise: (name: string) => void
}

const SelectExerciseModal = ({ onSelectExercise }: SelectExerciseModal) => {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')

    const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <CustomButton
                title='Select exercise'
                style={{ marginBottom: 15 }}
                onPress={() => setIsOpen(true)}
            />

            <Modal visible={isOpen} transparent={true} animationType='fade' onRequestClose={() => setIsOpen(false)}>
                <View style={styles.overlay}>
                    <Card
                        title='Select exercise'
                        style={styles.modalContent}
                    >
                        <AntDesign
                            name='close'
                            size={20}
                            color='gray'
                            style={styles.closeButton}
                            onPress={() => setIsOpen(false)}
                        />

                        <TextInput
                            placeholder='Search...'
                            value={search}
                            onChangeText={setSearch}
                            style={styles.input}
                        />

                        <FlatList
                            data={filteredExercises}
                            contentContainerStyle={{ gap: 20 }}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={{ gap: 5 }}
                                    onPress={() => {
                                        // Notify parent component about the selected exercise
                                        onSelectExercise(item.name)
                                        setIsOpen(false)
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ color: 'gray' }}>{item.muscle}</Text>
                                </Pressable>
                            )}
                        />
                    </Card>
                </View >
            </Modal >
        </>
    )
}

export default SelectExerciseModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        width: '90%',
        height: '80%'
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    input: {
        padding: 10,
        marginVertical: 10
    }
})