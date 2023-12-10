import { createSlice } from "@reduxjs/toolkit"

export default recorderSlice = createSlice({
    name: "recorder",
    initialState: null,
    reducers: {
        newRecorder: (state, action) => {
            console.log(action)
            return new MediaRecorder(action.payload, {mimeType: 'video/webm'})
        },
    },
})