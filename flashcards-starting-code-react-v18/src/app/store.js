import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsSliceReducer from "../features/topics/topicsSlice";
import { addTopic } from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer
  },
});
