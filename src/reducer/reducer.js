export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //remove after finished developing...
    // token: "BQCl4ppaQJtXRebsdnmZjRBsE9LpcRajDzu51OScY_QWAUK1N9…PEu9OzlNchVaZiTFxRnhMiZX9rBK2oETLIPmYfgzB6glUkpaC"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists
            };
        default:
            return state;
    }
}

export default reducer;