import { createExercise } from "@/services/exerciseService";
import { finishWorkout, newWorkout } from "@/services/workoutService";
import { WorkoutWithExercises } from "@/types/models";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
    currentWorkout: WorkoutWithExercises | null,
    workouts: WorkoutWithExercises[]
}

type Actions = {
    startWorkout: () => void,
    finishWorkout: () => void,

    addExercise: (name: string) => void
}

export const useWorkouts = create<State & Actions>()(immer((set, get) => ({
    currentWorkout: null,
    workouts: [],

    startWorkout: () => {
        set({ currentWorkout: newWorkout() })
    },

    finishWorkout: () => {
        const { currentWorkout } = get()
        if (!currentWorkout) return

        const finishedWorkout = finishWorkout(currentWorkout)

        set((state) => {
            // with Immer
            state.currentWorkout = null
            state.workouts.unshift(finishedWorkout)

            // without Immer
            // ({
            //     currentWorkout: null,
            //     workouts: [finishedWorkout, ...state.workouts]
            // })
        })
    },

    addExercise: (name: string) => {
        const { currentWorkout } = get()
        if (!currentWorkout) return

        const newExercise = createExercise(name, currentWorkout.id)

        // With Immer. Don't return it, so use the curly brackets
        set(state => {
            state.currentWorkout?.exercises.push(newExercise)
        })

        // Without Immer
        // set((state) => ({
        //     currentWorkout: state.currentWorkout && {
        //         ...state.currentWorkout,
        //         exercises: [...state.currentWorkout?.exercises, newExercise]
        //     }
        // }))
    }
})))