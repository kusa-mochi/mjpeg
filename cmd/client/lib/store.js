import { configureStore } from "@reduxjs/toolkit"
import recorderSlice from '@/lib/recorder'

export const store = configureStore({
    reducer: {
        recorder: recorderSlice.reducers,
    },
})