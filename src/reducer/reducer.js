export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;