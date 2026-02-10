import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        openAiMovieSuggestions: null,
        tmdbMovieResult: null
    },
    reducers: {
        toggleGptSearchState: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addRecommendedMovies: (state, action) => {
            const { openAiMovieSuggestions, tmdbMovieResult } = action.payload;
            state.openAiMovieSuggestions = openAiMovieSuggestions;
            state.tmdbMovieResult = tmdbMovieResult;
        }
    }
});

export const { toggleGptSearchState, addRecommendedMovies } = gptSlice.actions;

export default gptSlice.reducer;