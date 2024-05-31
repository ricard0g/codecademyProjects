import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {id} = action.payload;
            action.payload.quizIds = [];
            state.topics = {
                [id]: action.payload,
            };
        },
        addQuizId: (state, action) => {
            const {id, topicId} = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
})

// Function Selectors
export const selectTopics = (state) => state.topics.topics;

// Exports
export default topicsSlice.reducer;
export const {addTopic} = topicsSlice.actions;