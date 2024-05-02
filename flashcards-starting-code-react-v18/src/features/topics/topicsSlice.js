import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {id} = action.payload;
            state.topics = {
                [id]: action.payload,
            };
            action.payload.quizIds = [];
        }
    }
})

// Function Selectors
export const selectTopics = state => state.topics;

// Exports
export default topicsSlice.reducer;
export const {addTopic} = topicsSlice.actions;