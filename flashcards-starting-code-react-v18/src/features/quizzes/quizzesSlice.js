import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: "quizzesSlice",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id} = action.payload
            state.quizzes = {
                [id]: action.payload
            }
        }
    }
})

// Function Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Exports
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;