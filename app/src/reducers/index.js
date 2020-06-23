export const initialState = {
    artist: '',
    song: '',
    lyrics: '',
    loading: false,
    isFetching: false,
    error: ''
}


export const lyricReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}