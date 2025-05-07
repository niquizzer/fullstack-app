import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        currentQuote: (state = "", action) => {
            switch (action.type) {
                case "SET_QUOTE":
                    return action.payload;
                default:
                    return state;
            }
        },
        currentAuthor: (state = "", action) => {
            switch (action.type) {
                case "SET_AUTHOR":
                    return action.payload;
                default:
                    return state;
            }
        },
    },
});

export default store;