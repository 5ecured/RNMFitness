import { finishWorkout, newWorkout } from "@/services/workoutService";
import { WorkoutWithExercises } from "@/types/models";
import { create } from "zustand";

type State = {
    currentWorkout: WorkoutWithExercises | null,
    workouts: WorkoutWithExercises[]
}

type Actions = {
    startWorkout: () => void,
    finishWorkout: () => void
}

export const useWorkouts = create<State & Actions>()((set, get) => ({
    currentWorkout: null,
    workouts: [],

    startWorkout: () => {
        set({ currentWorkout: newWorkout() })
    },

    finishWorkout: () => {
        const { currentWorkout } = get()
        if (!currentWorkout) return

        const finishedWorkout = finishWorkout(currentWorkout)

        set((state) => ({
            currentWorkout: null,
            workouts: [finishedWorkout, ...state.workouts]
        }))
    }
}))