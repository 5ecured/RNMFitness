import { ExerciseWithSets } from "@/types/models"
import { createSet, getSetTotalWeight } from "./setService"
import * as Crypto from 'expo-crypto'


export const getExerciseTotalWeight = (exercise: ExerciseWithSets) => {
    return exercise.sets.reduce(
        (totalSetWeight, set) =>
            totalSetWeight + getSetTotalWeight(set),
        0
    )
}

export const createExercise = (name: string, workoutId: string) => {
    const newExercise: ExerciseWithSets = {
        id: Crypto.randomUUID(),
        name,
        workoutId,
        sets: []
    }

    // add one empty set after selecting an exercise
    newExercise.sets.push(createSet(newExercise.id))

    return newExercise
}